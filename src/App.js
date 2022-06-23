import React  from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import Home from "./Home";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-todo">Add Todo</Link>
            </li>
          </ul>
        </nav>
        </div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="add-todo" element={<AddTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import HomePage from "./components/page/homepage/homepage.component";
import { Link, Route, Routes } from "react-router-dom";
import Expenses from "./expenses";
import Invoices from "./invoices";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;

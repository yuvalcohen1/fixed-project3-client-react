import React, { FC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Number from "./components/Number";
import Output from "./components/Output";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Output/>}/>
          <Route path="numbers/:numberId" element={<Number />} />
      </Routes>
    </>
  );
}

export default App;

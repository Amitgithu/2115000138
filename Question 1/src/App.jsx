import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="/Prime" element={<Prime />} />
          <Route path="/Even" element={<Even />} />
          <Route path="/Fibonacci" element={<Fibonacci />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Routes>
    </>
  );
}

export default App;

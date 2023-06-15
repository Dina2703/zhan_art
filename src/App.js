import Login from "./comp/Login";
import Hero from "./comp/Hero";
import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero isAdmin={isAdmin} />} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

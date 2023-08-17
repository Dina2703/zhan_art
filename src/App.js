import Login from "./comp/Login";
import Hero from "./comp/Hero";
import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const AdminContext = createContext();
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={isAdmin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
        </Routes>
      </BrowserRouter>
    </AdminContext.Provider>
  );
}

export default App;

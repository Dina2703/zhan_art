import Login from "./pages/Login";

import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Home from "./comp/Home";
import BlogAdmin from "./pages/BlogAdmin";
import NotFound from "./pages/NotFound";

export const AdminContext = createContext();
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const Layout = () => {
    return (
      <div className=" bg-gray-100 dark:bg-gray-600 text-slate-600 dark:text-white">
        <div className="flex flex-col min-h-[100dvh] max-w-4xl mx-auto   px-5 md:px-10 2xl:px-0  relative ">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <AdminContext.Provider value={isAdmin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/login"
              element={<BlogAdmin isAdmin={isAdmin} />}
            />
            <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AdminContext.Provider>
  );
}

export default App;

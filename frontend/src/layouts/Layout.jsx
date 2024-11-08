import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";


import PrivateRoute from "../components/PrivateRoute";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;

import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route  path="/" element = {<Register/>} />
        <Route  path="/login" element = {<Login/>} />
        <Route  path="/dashboard" element = {<DashBoard/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductedRoute from "./ProductedRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<ProductedRoute><DashBoard/></ProductedRoute>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
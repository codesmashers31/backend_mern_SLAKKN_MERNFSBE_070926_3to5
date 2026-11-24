import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import ProductedRoute from "./ProductedRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/dashboard" element={<ProductedRoute><DashBoard/></ProductedRoute>}  />
      </Routes>
    </>
  );
};

export default AppRoutes;
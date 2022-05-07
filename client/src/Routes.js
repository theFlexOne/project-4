import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointments from "./pages/Appointments/Appointments";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default AppRoutes;

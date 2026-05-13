import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "../pages/Booking";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </main>
  );
};

export default Main;

// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appoinment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth";
import { FetchProvider } from "./context/FetchProvider";
// import { FetchProvider } from "./context/FetchProvider";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      {/* <FetchProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      {/* </FetchProvider> */}

      <Footer />
    </div>
  );
}

export default App;

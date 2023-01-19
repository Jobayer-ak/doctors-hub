// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthProvider";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Setting from "./components/Setting/Setting";

function App() {
  return (
    <div className="App md:flex">
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>

        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;

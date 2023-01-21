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
import Specialties from "./components/Specialties/Specialties";
import RequireAuth from "./components/Login/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App md:flex">
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/setting"
            element={
              <RequireAuth>
                <Setting />
              </RequireAuth>
            }
          />
        </Routes>

        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;

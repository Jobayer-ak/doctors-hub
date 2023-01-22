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
import AddDoctor from "./components/AddDoctor/AddDoctor";

function App() {
  return (
    <div className="App md:flex h-screen">
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/addDoctor" element={<AddDoctor />} />

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/setting"
            element={
              <RequireAuth>
                <Setting />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;

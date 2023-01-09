// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appoinment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/appointment"
            element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>

        <Footer />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;

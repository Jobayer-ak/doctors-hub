// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthProvider";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes> */}

        {/* <Navbar /> */}
        {/* <Routes>
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
            <Route path="users" element={<AllUsers></AllUsers>}></Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>

        <Footer /> */}
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;

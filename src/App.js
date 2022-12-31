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
import {AuthProvider} from "./context/AuthProvider"

function App() {
  // const [user, setUser] = useState({ uName: "", uRole: "", uEmail: "" });

  // useEffect(() => {
  //   const name = localStorage.getItem("userName");
  //   const role = localStorage.getItem("userRole");
  //   const email = localStorage.getItem("userEmail");
  //   setUser({ uName: name, uRole: role, uEmail: email });
  // }, [setUser]);

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

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

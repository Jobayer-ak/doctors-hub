// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthProvider';
import Navbar from './components/common/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Setting from './components/Setting/Setting';
import RequireAuth from './components/Login/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Appointments from './components/Appointment/Appointments';
import NotFound from './components/NotFound/NotFound';
import ForgetPassword from './components/EmailConfirm/ForgetPassword';
import SetPassword from './components/EmailConfirm/SetPassword';
import Contact from './components/contact/Contact';
import Payment from './components/Dashboard/Payment';
import ConfirmEmail from './components/EmailConfirm/ConfirmEmail';
import About from './components/AboutUs/About';

function App() {
  return (
    <div className="App lg:flex min-h-screen">
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
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
          <Route
            path="dashboard/payment/:id"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signup/confirmation/:token"
            element={<ConfirmEmail />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user/set-new-password" element={<SetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <ToastContainer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;

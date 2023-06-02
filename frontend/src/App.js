import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Navbar from "./components/main/Navbar";
import Main from "./components/main";
import Contact from "./components/main/Contact";
import User from "./components/user";
import SearchDeveloper from "./components/user/SearchDeveloper";
import CompareDeveloper from "./components/user/CompareDevelopers";
import AdminProvider from "./context/AdminProvider";
import UserProvider from "./context/UserProvider";
import UserAuth from "./auth/UserAuth";
import { Toaster } from "react-hot-toast";
import History from "./components/user/History";
import UserProfile from "./components/user/UserProfile";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster position="top-center" />
        <AdminProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route path="main" element={<Main />} >

                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="contact" element={<Contact />} />
              </Route>
              <Route path="user" element={ <UserAuth> <User /> </UserAuth>} >
                <Route path="search" element={<SearchDeveloper />} />
                <Route path="compare" element={<CompareDeveloper />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="history" element={<History />} />
              </Route>
            </Routes>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;

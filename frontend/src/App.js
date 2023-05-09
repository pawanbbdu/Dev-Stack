import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Navbar from "./components/main/Navbar";
import Main from "./components/main";
import Contact from "./components/main/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/main/home" /> } />
          <Route path="main" element={ <Main /> } >

          <Route path="home" element={ <Home /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="signup" element={ <Signup /> } />
          <Route path="contact" element={ <Contact /> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

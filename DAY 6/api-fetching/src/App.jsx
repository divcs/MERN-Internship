import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Calc from "./Calc";
import UserData from "./UserData";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header /><br /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calc" element={<Calc />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserData" element={<UserData />} />
      </Routes><br /><br />
      <Footer />

    </div>
  );
}

export default App
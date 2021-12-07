import "./styles.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Admin from "./Pages/Admin";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
      </Routes>
    </div>
  );
}

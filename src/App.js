import "./styles.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
      </Routes>
    </div>
  );
}

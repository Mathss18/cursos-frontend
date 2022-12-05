import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Login />} path="/entrar" />
          <Route element={<Register />} path="/registrar" />
          <Route element={<Home />} path="/home" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

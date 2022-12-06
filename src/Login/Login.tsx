import "./../styles/css/styles.css";
import LayoutForm from "../components/LayoutForm";
import { useState } from "react";

const initialPage = {
  route: "login",
  namePage: "Entrar",
  routeOtherPage: "register",
  nameOtherPage: "Registrar",
};

export default function Login() {
  const [page, setPage] = useState(initialPage);

  return (
    <>
      <LayoutForm page={page} />
    </>
  );
}

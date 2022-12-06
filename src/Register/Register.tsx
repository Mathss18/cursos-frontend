import "./../styles/css/styles.css";
import LayoutForm from "../components/LayoutForm";
import { useState } from "react";

const initialPage = {
  route: "register",
  namePage: "register",
  routeOtherPage: "login",
  nameOtherPage: "Entrar",
};

export default function Register() {
  const [page, setPage] = useState(initialPage);

  return (
    <>
      <LayoutForm page={page} />
    </>
  );
}

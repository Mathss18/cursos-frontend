import "./../styles/css/styles.css";
import LayoutForm from "../components/LayoutForm";
import { useState } from "react";

const initialPage = {
  route: "registrar",
  namePage: "Registrar",
  routeOtherPage: "entrar",
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

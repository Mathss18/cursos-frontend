import {
  Grid,
  Button,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "./../styles/css/styles.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const values = {
  nome: "",
  email: "",
  senha: "",
};

export default function LayoutForm({ page }: { page: any }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: values,  
    onSubmit: (event) => {
      handleSubmit();
    },
  });

  function handleSubmit() {
    //Validar informações
    if (!formik.values.nome || !formik.values.senha) {
      toast.error("O nome de usuário ou senha não podem ser vazios");
      return;
    }

    //Envia as informações
    const params = {
      nome: formik.values?.nome,
      email: formik.values?.email,
      senha: formik.values?.senha,
    };
    console.log('params', params)

    // if (params.nome === user?.nome && params.senha === user?.senha) {
    //   toast.success("Bem vindo!");
    //   navigate("/home");
    // }

    // Exemplo utilizando o axios
    // api
    //   .post("/rota", params)
    //   .then((response) => {})
    //   .catch((error) => {
    //     toast.error("Erro ao enviar dados");
    //     console.log(error);
    //   });
  }

  return (
    <>
      <Grid container className="container">
        {/* Logo */}
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <img
            src="/src/assets/imgs/logo.png"
            alt="logo"
            className="logo"
            onClick={() => {
              navigate(`/${page?.route}`);
            }}
          />
        </Grid>

        {/* Ilustração */}
        <Grid
          item
          md={4}
          lg={6}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <img
            src="/src/assets/svgs/illustration.svg"
            alt="illustration"
            className="ilustracao"
          />
        </Grid>

        {/* Formulário */}
        <Grid item xs={12} sm={12} md={8} lg={4} className="gridForm">
          <Paper
            elevation={3}
            style={{
              width: "400px",
              height: page?.route === "entrar" ? "420px" : "500px",
              background: "#ffffff",
              textAlign: "center",
              boxShadow: "4px 1px 16px 0px rgba(0,0,0,0.49)",
              borderRadius: "6%",
            }}
            className="paperForm"
          >
            <div className="form">
              <form onSubmit={formik.handleSubmit}>
                <Typography>{page?.namePage}</Typography>

                <TextField
                  label="Nome"
                  name="nome"
                  value={formik.values?.nome}
                  onChange={formik.handleChange}
                  variant="outlined"
                  type="text"
                  placeholder="Nome"
                  style={{ marginTop: "30px" }}
                />

                {page?.route === "registrar" ? (
                  <>
                    <TextField
                      label="E-mail"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      variant="outlined"
                      type="text"
                      placeholder="E-mail"
                      style={{ marginTop: "30px" }}
                    />

                  </>
                ) : <></>}


                <TextField
                  label="Senha"
                  name="senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  variant="outlined"
                  type="password"
                  placeholder="Senha"
                  style={{ marginTop: "30px" }}
                />

                <br />
                <Button
                  style={{
                    marginTop: "30px",
                    background: "#ffa800",
                    color: "#000000",
                  }}
                  onClick={handleSubmit}
                >
                  {page?.namePage}
                </Button>

                <p>
                  Não tem uma conta?{" "}
                  <a style={{ color: "#ffa800" }} href={`/${page?.routeOtherPage}`}>{page?.nameOtherPage}</a>
                </p>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

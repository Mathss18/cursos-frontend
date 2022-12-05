import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#525050",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={12} lg={12} md={12}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar>
            <IconButton
              onClick={() => {
                navigate("/home");
              }}
            >
              <img src="/src/assets/icons/flaticon.ico"></img>
            </IconButton>
            <Search>
              <SearchIconWrapper>
                {/* <SearchIcon style={{ color: "#3B5E94" }} /> */}
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => {
                    navigate("/configuracoes");
                  }}
                >
                  <SettingsOutlinedIcon style={{ color: "#3B5E94" }} />
                </IconButton> */}

              {/* <IconButton size="large">
                  <PlaylistAddOutlinedIcon style={{ color: "#3B5E94" }} />
                </IconButton> */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

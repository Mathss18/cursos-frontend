import { AppBar, Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, ImageList, ImageListItem, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { width } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import api from "../Service/api";


export default function Home() {
    const [selectedDado, setSelectedDado] = useState(
        {
            "url": "",
            "title": "",
            "description": "",
            "thumbnail": "",
        }
    )
    const [dados, setDados] = useState([])
    const [nome, setNome] = useState('')

    useEffect(() => {
        api.get('/me')
            .then((response) => {
                setNome(response.data.name)
                console.log(response)
            }).catch((error) =>
                console.log(error)
            )

        api.get('/videos')
            .then((response) => {
                setDados(response.data.data)
                setSelectedDado(response.data.data[0])
            }).catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <>
            {/* TopBar */}
            <Box style={{ flexGrow: 1, marginBottom: '10vh' }}>
                <AppBar position="absolute" sx={{ background: "#fff", color: "#000" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img src="/src/assets/imgs/logo.png"></img>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Cursos
                        </Typography>

                        <IconButton>
                            <Avatar sx={{ background: "#ffa800" }}>
                                <Typography>{nome.slice(0, 1)}</Typography>
                            </Avatar>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Cursos  */}

            <div style={{ display: 'flex', gap: 20, marginTop: 120 }}>
                <div style={{ width: '70%', height: 700, border: '5px solid black', borderRadius: 15 }}>
                    <iframe
                        width="100%"
                        height="100%" src={selectedDado.url}
                        title={selectedDado.title}
                        frameBorder={'0'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                </div>
                <div style={{ display: 'flex', gap: 15, flexDirection: 'column', overflowY: 'scroll', height: 700 }}>
                    {dados.map((item: any) => (
                        <>
                            <Grid item style={{ border: '1px solid black', borderRadius: 5 }}>
                                <Card style={{ width: 450 }} onClick={() => { setSelectedDado(item) }}>
                                    <CardActionArea>
                                        <img src={item.thumbnail} style={{ width: 450 }}></img>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>


                            </Grid>
                        </>
                    ))}
                </div>
            </div>

            <Grid container spacing={0}>
                <Grid item>
                    <Button
                        type="submit"
                        variant="outlined"
                        className={"btn btn-primary btn-spacing"}
                    >
                        Salvar
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        className={"btn btn-error btn-spacing"}
                    >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
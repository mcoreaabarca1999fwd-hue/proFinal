import { Box, Grid } from "@mui/material";
import LeftSidebar from "../../componentes/foroComp/LeftSidebar";
import NavBar from "../../componentes/educacion/NavBar";
import PostCard from "../../componentes/foroComp/PostCard";
import { useEffect, useState } from "react";
import { getData } from "../../servicios/fetch";
import { Typography } from "@mui/material";
import Footer from "../../componentes/homePage/Footer";

export default function ForoPage() {
  const [publicacions,setPublicaciones] = useState([])

  // se debe hacer un useEffect que consulte al get data las publicaciones
  useEffect(()=>{
    async function mostrarPublicacion() {
      const respuesta = await getData(`foro/publicacion/`)
      setPublicaciones(respuesta)
    }
    mostrarPublicacion()
  },[])
  return (
    <Box sx={{ bgcolor: "#f8f6f6", minHeight: "100vh" }}>
      <NavBar />

      <Box sx={{ maxWidth: 1280, mx: "auto", px: 3, py: 4 }}>
        <Grid container spacing={4}>
          {/* Left */}
          <Grid item xs={12} lg={3}>
            <LeftSidebar />
          </Grid>

          {/* Feed */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {publicacions.length === 0 && (
                <Typography variant="h6" align="center" color="textSecondary">
                  No hay publicaciones aún. ¡Sé el primero en crear una!
                </Typography>
              )}
              {publicacions.map((publicacion)=>(
                <PostCard
                  key={publicacion.id}
                  user={publicacion.nombre_usuario}
                  time={publicacion.fecha_creacion}
                  title={publicacion.titulo}
                  text={publicacion.contenido}
                  tags={[`#${publicacion.etiquetaForo}`]}
                  likes={0}
                  comments={0}
                  avatar="https://lh3.googleusercontent.com/a/AGNmyxY5p3b0kC1NpOeG9rY0Y6f6s0dT7q8YcXW8v6g=s96-c"
                />
              )
              )}
              
            </Box>
          </Grid>

    
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
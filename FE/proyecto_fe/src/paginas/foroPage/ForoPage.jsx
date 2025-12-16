import { Box, Typography } from "@mui/material";
import LeftSidebar from "../../componentes/foroComp/LeftSidebar";
import NavBar from "../../componentes/educacion/NavBar";
import PostCard from "../../componentes/foroComp/PostCard";
import { useEffect, useState } from "react";
import { getData } from "../../servicios/fetch";
import Footer from "../../componentes/homePage/Footer";
import { useNavigate } from "react-router-dom";

export default function ForoPage() {
  const navigate = useNavigate();
  const [publicacions, setPublicaciones] = useState([]);

  useEffect(() => {
    async function mostrarPublicacion() {
      const respuesta = await getData("foro/ver-publicacion/");
      setPublicaciones(respuesta || []);
    }
    mostrarPublicacion();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ overflowX: "hidden" }}
    >
      {/* Barra superior */}
      <NavBar />

      {/* Layout principal */}
      <Box display="flex" flex={1} bgcolor="#f8f9fb">
        {/* Sidebar izquierdo */}
        <Box
          width={{ xs: "100px", md: "260px" }}
          flexShrink={0}
          borderRight="1px solid #e0e0e0"
          p={2}
          bgcolor="#fff"
        >
          <LeftSidebar />
        </Box>

        {/* Feed central */}
        <Box
          flex={1}
          overflow="auto"
          p={1}
          display="flex"
          justifyContent="left"
          sx={{ overflowX: "hidden" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              boxSizing: "border-box",
            }}
          >
            {publicacions.length === 0 && (
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
              >
                No hay publicaciones aún. ¡Sé el primero en crear una!
              </Typography>
            )}

            {publicacions.map((publicacion) => (
              <PostCard
                key={publicacion.id}
                user={publicacion.nombre_usuario}
                time={publicacion.fecha_creacion}
                title={publicacion.titulo}
                text={publicacion.contenido}
                tags={[`#${publicacion.etiquetaForo}`]}
                likes="∞"
                comments={0}
                verComentarios={() => {
                  localStorage.setItem(
                    "idPublicacion",
                    publicacion.id
                  );
                  navigate("/comentarios");
                }}
                avatar="https://lh3.googleusercontent.com/a/AGNmyxY5p3b0kC1NpOeG9rY0Y6f6s0dT7q8YcXW8v6g=s96-c"
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

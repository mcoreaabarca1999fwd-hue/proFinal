import { Box } from "@mui/material";
import LeftSidebar from "../../componentes/foroComp/LeftSidebar";
import NavBar from "../../componentes/educacion/NavBar";
import PostCard from "../../componentes/comentarios/PostCard";
import { useEffect, useState } from "react";
import { getData } from "../../servicios/fetch";


export default function ForoPage() {
  const [publicacion,setPublicacion] = useState([])
  const formatoFecha = (fechaString) => {
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString();
  }
  useEffect(()=>{
    async function mostrarPublicacion() {
      const peticion = await getData(`foro/publicacion/${localStorage.getItem('idPublicacion')}/`)
      setPublicacion(peticion[0])
    }
    mostrarPublicacion()
  },[])

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Barra superior */}
      <NavBar />

      {/* Layout principal */}
      <Box display="flex" flex={1} bgcolor="#f8f9fb">
        {/* Sidebar izquierdo */}
        <Box
          width={{ xs: "100px", md: "260px" }}
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
          p={3}
          display="flex"
          justifyContent="center"
        >
          <Box width="70%" maxWidth="700px" display="flex" flexDirection="column" gap={2}>
            <PostCard titulo={publicacion.titulo} descripcion={publicacion.contenido} fechaPublicacion={formatoFecha(publicacion.fecha_creacion)} usuario={publicacion.nombre_usuario} />
          </Box>
        </Box>
          
        
      </Box>
    </Box>
  );
}
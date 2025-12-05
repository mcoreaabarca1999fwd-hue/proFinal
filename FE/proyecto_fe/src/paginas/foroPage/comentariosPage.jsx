import { Box } from "@mui/material";
import LeftSidebar from "../../componentes/foroComp/LeftSidebar";
import NavBar from "../../componentes/educacion/NavBar";
import PostCard from "../../componentes/comentarios/PostCard";


export default function ForoPage() {
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
            <PostCard />
            <PostCard />
            {/* Más PostCards */}
          </Box>
        </Box>
          
        
      </Box>
    </Box>
  );
}
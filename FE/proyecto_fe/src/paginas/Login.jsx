import React from "react";
import { Box } from "@mui/material";
import FormLogin from "../componentes/FormLogin";



export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        backgroundColor: "#FDF9FF",
      }}
    >
      {/* Imagen izquierda */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "rgba(245, 209, 215, 0.4)"
        }}
      >
        <Box
          component="img"
          src="../src/imagenes/imgInicio.png"
          alt="Flor Pastel"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
            mixBlendMode: "multiply",
            position: "absolute",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(245, 209, 215, 0.5), transparent)"
          }}
        />
      </Box>

      {/* Formulario */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4, lg: 6 }
        }}
      >
        <FormLogin />
      </Box>
    </Box>
  );
}

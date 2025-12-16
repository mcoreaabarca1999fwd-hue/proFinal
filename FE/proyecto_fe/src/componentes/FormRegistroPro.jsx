import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Paper
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { postData } from "../servicios/fetch";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [cedula_profesional, setCedula_profesional] = useState("");
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  async function guardarUsuario() {
      const nuevoUsuario = {
        first_name,
        last_name,
        username,
        email,
        password,
        "fecha_nacimiento":birth_date,
      }
      if (password != confirm_password) {
          alert('Las claves deben ser iguales DAAAAH')
          return
      }
      const peticion = await postData('usuarios/crear-usuario/', nuevoUsuario)
      console.log(peticion);
      localStorage.setItem('idUsuario', peticion.id);
      navigate('/agrega-tu-ciclo')

  }

  return (  
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        fontFamily: `"Plus Jakarta Sans", sans-serif`,
        backgroundColor: "#FAF9F6",
        backgroundImage: `
          radial-gradient(circle at top right, #E6E6FA 20%, transparent 50%),
          radial-gradient(circle at bottom left, #FFC0CB 20%, transparent 60%)
        `
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 480 }}>
        {/* HEADER */}
        <Box textAlign="center" mb={4}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "#333",
            }}
          >
            Crea tu cuenta
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: "1rem",
              color: "rgba(51,51,51,0.7)",
            }}
          >
            Únete a nuestra comunidad y toma el control de tu ciclo.
          </Typography>
        </Box>

        {/* FORM CARD */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: "1rem",
            backgroundColor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            mb: 3
          }}
        >
          <Box component="form" noValidate autoComplete="off">

            {/* Nombre + Apellido */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                  Nombre
                </Typography>
                <TextField
                  fullWidth
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                  placeholder="Ingresa tu nombre"
                  InputProps={{ sx: { height: 56 } }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                  Apellido
                </Typography>
                <TextField
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  fullWidth
                  placeholder="Ingresa tu apellido"
                  InputProps={{ sx: { height: 56 } }}
                />
              </Box>
                {/* Cedula Profesional */}
              <Box sx={{ flex: 1 }}>
                <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                  ID Profesional
                </Typography>
                <TextField
                  value={cedula_profesional}
                  onChange={(e) => setCedula_profesional(e.target.value)}
                  fullWidth
                  placeholder="Cédula profesional"
                  InputProps={{ sx: { height: 56 } }}
                />
              </Box>
            </Box>

            {/* Username */}
            <Box sx={{ mb: 3 }}>
              <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                Nombre de usuario
              </Typography>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                placeholder="Ingresa tu nombre de usuario"
                InputProps={{ sx: { height: 56 } }}
              />
            </Box>

            {/* Email */}
            <Box sx={{ mb: 3 }}>
              <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                Correo electrónico
              </Typography>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                type="email"
                placeholder="tu.correo@ejemplo.com"
                InputProps={{ sx: { height: 56 } }}
              />
            </Box>

            {/* Fecha */}
            <Box sx={{ mb: 3 }}>
              <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                Fecha de nacimiento
              </Typography>
              <TextField
                fullWidth
                value={birth_date}
                onChange={(e) => setBirth_date(e.target.value)}
                type="date"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: {
                    height: 56,
                  }
                }}
              />
            </Box>

            {/* Contraseña */}
            <Box sx={{ mb: 3 }}>
              <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                Contraseña
              </Typography>
              <TextField
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="Crea una contraseña segura"
                InputProps={{
                  sx: { height: 56 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPass(!showPass)}>
                        {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            {/* Confirmar contraseña */}
            <Box sx={{ mb: 4 }}>
              <Typography mb={1} sx={{ fontWeight: 500, color: "#333" }}>
                Confirmar contraseña
              </Typography>
              <TextField
                fullWidth
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
                type={showPass2 ? "text" : "password"}
                placeholder="Vuelve a escribir la contraseña"
                InputProps={{
                  sx: { height: 56 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPass2(!showPass2)}>
                        {showPass2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            {/* SUBMIT BUTTON */}
            <Button
              fullWidth
              onClick={guardarUsuario}
              variant="contained"
              sx={{
                height: 56,
                backgroundColor: "#D67C97",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#c76c86",
                }
              }}
            >
              Siguiente: Configurar Ciclo
            </Button>
          </Box>

          {/* Disclaimer */}
          <Typography
            textAlign="center"
            sx={{
              fontSize: "0.75rem",
              color: "rgba(51,51,51,0.6)",
              mt: 2
            }}
          >
            Al crear una cuenta, aceptas nuestra{" "}
            <span style={{ color: "#D67C97", fontWeight: 600, cursor: "pointer" }}>
              Política de Privacidad
            </span>{" "}
            y los{" "}
            <span style={{ color: "#D67C97", fontWeight: 600, cursor: "pointer" }}>
              Términos de Servicio
            </span>.
          </Typography>
        </Paper>

        {/* FOOTER */}
        <Typography textAlign="center" sx={{ color: "#333", fontSize: "0.9rem" }}>
          ¿Ya tienes una cuenta?{" "}
          <span
            onClick={() => navigate('/login')}
          style={{ fontWeight: 700, color: "#D67C97", cursor: "pointer" }}>
            Inicia sesión
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
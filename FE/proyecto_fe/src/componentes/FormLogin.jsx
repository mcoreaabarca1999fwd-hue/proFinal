import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Link
} from "@mui/material";
import React, { useState } from 'react'
import { postData } from '../servicios/fetch'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
export default function FormLogin() {
    const [showPass, setShowPass] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function validarInicio() {
        const objUsuario = {
            'username': username,
            'password': password
        }
        const peticion = await postData('usuarios/login/', objUsuario)
        console.log(peticion);
        if (peticion.message === "Inicio exitoso") {
            localStorage.setItem('idUsuario', peticion.id)
            navigate('/perfil')
        }else{
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >
            <Box textAlign="center">
                <Typography variant="h4" fontWeight="700" color="text.primary">
                    Inicia sesión en tu cuenta
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>

                <Box>
                    <Typography mb={1} fontWeight={600}>Correo electrónico</Typography>
                    <TextField
                        fullWidth
                        placeholder="tu@correo.com"
                        variant="outlined"
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            sx: {
                                height: 56,
                                borderRadius: "12px",
                                background: "#fff"
                            }
                        }}
                    />
                </Box>

                {/* Contraseña */}
                <Box>
                    <Typography mb={1} fontWeight={600}>Contraseña</Typography>

                    <TextField
                        fullWidth
                        type={showPass ? "text" : "password"}
                        placeholder="Introduce tu contraseña"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            sx: {
                                height: 56,
                                borderRadius: "12px",
                                background: "#fff"
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPass(!showPass)}>
                                        {showPass ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
            </Box>

            {/* Opciones */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <FormControlLabel
                    control={<Checkbox sx={{ color: "#a65eed" }} />}
                    label="Recordarme"
                />

                <Link sx={{ color: "#a65eed", fontWeight: 600 }} href="#">
                    ¿Olvidaste tu contraseña?
                </Link>
            </Box>

            {/* Botón */}
            <Button
                onClick=
                {validarInicio}

                variant="contained"
                sx={{
                    background: "#a65eed",
                    height: 48,

                    borderRadius: "12px",
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: "700",
                    ":hover": { background: "#9553d3" }
                }}
            >
                Iniciar Sesión
            </Button>

            {/* Enlace registro */}
            <Typography textAlign="center" mt={2} color="text.secondary">
                ¿Eres nueva aquí?{" "}
                <Link href="/registro" sx={{ color: "#a65eed", fontWeight: 700 }}>
                    Crea una cuenta
                </Link>
            </Typography>
        </Box>
    );
}

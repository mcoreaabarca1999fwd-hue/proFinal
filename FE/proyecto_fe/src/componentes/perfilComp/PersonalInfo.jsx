import React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../servicios/fetch";
export default function PersonalInfo() {
  const [usuario, setUsuario] = useState([]);
  const [usuarioForm,setUsuarioForm]=useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function traerNombre() {
      const usuario = await getData(`usuarios/usuario/${localStorage.getItem('idUsuario')}/`)
      setUsuario(usuario[0])
      setUsuarioForm({
        first_name: usuario[0].first_name,
        last_name: usuario[0].last_name,
        email: usuario[0].email,
        fecha_nacimiento: usuario[0].fecha_nacimiento,
      });

    }
    traerNombre()
  }, [])
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth  defaultValue={usuarioForm.first_name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth  defaultValue={usuarioForm.last_name}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="date"  InputLabelProps={{ shrink: true }} defaultValue={usuarioForm.fecha_nacimiento} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="email"  defaultValue={usuarioForm.email} disabled />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button sx={{background: "#9947eb", color:"#ffffff"}} variant="contained" color="primary">Guardar Cambios</Button>
      </Box>
    </form>
  );
}
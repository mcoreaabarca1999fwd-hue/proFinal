import React, { useEffect } from "react";
import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, FormGroup, FormControlLabel, Switch, Button, Box, Typography } from "@mui/material";
import { getData } from "../../servicios/fetch";

export default function Preferences() {
   const [infoCicloUsuario, setInfoCicloUsuario] = React.useState([])
    const [formData, setFormData] = React.useState({})
   useEffect(()=>{
    async function traerInfoCiclo() {
       const peticion = await getData(`ciclos/ciclo-usuario/${localStorage.getItem('idUsuario')}/`)
        setInfoCicloUsuario(peticion[0])
        setFormData({
          duracion_promedio: peticion[0].duracion_promedio,
          duracion_menstruacion: peticion[0].duracion_menstruacion,
        })
    }
    traerInfoCiclo()
   },[])
  return (
    <Box>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={6}>
          <TextField   fullWidth type="number"   value={formData.duracion_promedio}  inputProps={{ min: 20, max: 38 }}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="number"  value={formData.duracion_menstruacion} inputProps={{ min: 3, max: 8 }}/>
        </Grid>
        <Grid item xs={12} md={6}>
        </Grid>
      </Grid>

      <Box mb={2}>
        <Typography variant="subtitle1" mb={1}>Notificaciones</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Recordatorio de inicio de periodo" />
          <FormControlLabel control={<Switch defaultChecked />} label="Aviso de ovulación" />
          <FormControlLabel control={<Switch />} label="Recordatorios de píldora" />
        </FormGroup>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button sx={{background: "#9947eb", color:"#ffffff"}} variant="contained" color="primary">Guardar Preferencias</Button>
      </Box>
    </Box>
  );
}
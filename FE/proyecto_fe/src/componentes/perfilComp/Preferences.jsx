import React, { useEffect, useState } from "react";
import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, FormGroup, FormControlLabel, Switch, Button, Box, Typography } from "@mui/material";
import { getData } from "../../servicios/fetch";

export default function Preferences() {
   const [infoCicloUsuario, setInfoCicloUsuario] = React.useState([])
    const [formData, setFormData] = React.useState({})
    const [valorDuracionPromedio, setValorDuracionPromedio] = useState('')
    const [valorDuracionMenstruacion, setValorDuracionMenstruacion] = useState('')
   useEffect(()=>{
    async function traerInfoCiclo() {
       const peticion = await getData(`ciclos/ciclo-usuario/${localStorage.getItem('idUsuario')}/`)
        setInfoCicloUsuario(peticion[0])
        setFormData({
          duracion_promedio: peticion[0].duracion_promedio,
          duracion_menstruacion: peticion[0].duracion_menstruacion,
        })
      setValorDuracionPromedio(peticion[0].duracion_promedio)
      setValorDuracionMenstruacion(peticion[0].duracion_menstruacion)
    }
    traerInfoCiclo()
   },[])
  return (
    <Box>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={6}>
          <p>Duracion promedio</p>
          <TextField   fullWidth type="number"   value={valorDuracionPromedio}  inputProps={{ min: 20, max: 38 }}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>Duracion menstruacion</p>
          <TextField fullWidth type="number"  value={valorDuracionMenstruacion} inputProps={{ min: 3, max: 8 }}/>
        </Grid>
        <Grid item xs={12} md={6}>
        </Grid>
      </Grid>
    </Box>
  );
}
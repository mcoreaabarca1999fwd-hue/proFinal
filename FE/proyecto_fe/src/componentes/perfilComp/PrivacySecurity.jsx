import React from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

export default function PrivacySecurity() {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>Contraseña</Typography>
      <Typography color="text.secondary" mb={2}>Para cambiar tu contraseña, ingresa tu contraseña actual y la nueva.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="password" label="Contraseña Actual" placeholder="••••••••" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="password" label="Nueva Contraseña" placeholder="••••••••" />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button sx={{color:"#9947eb", borderColor:"#9947eb"}} variant="outlined">Cambiar Contraseña</Button>
      </Box>

      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>Gestión de Cuenta</Typography>
        <Typography color="text.secondary" mb={1}>Elimina tu cuenta y todos tus datos de forma permanente. Esta acción no se puede deshacer.</Typography>
        <Button sx={{color:"#9947eb", borderColor:"#9947eb"}} variant="outlined" >Eliminar Cuenta</Button>
      </Box>
    </Box>
  );
}
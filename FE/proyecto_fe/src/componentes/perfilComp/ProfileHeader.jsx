import { Box, Typography, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../servicios/fetch";
export default function ProfileHeader() {
  const [usuario, setUsuario] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function traerNombre() {
      const usuario = await getData(`usuarios/usuario/${localStorage.getItem('idUsuario')}/`)
      setUsuario(usuario[0])
    }
    traerNombre()
  }, [])
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={3} bgcolor="background.paper" borderRadius={2} boxShadow={1}>
      <Box display="flex" gap={2} alignItems="center">
        <Avatar alt="Ana Pérez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4kqQmbk88lU5cojd_sueoVjgogpciLaBmxgjTx-GQj0f8uleS7EbSO-qPkyXg-r99ppHPKxQLrabSN3Zx8qKK-oyHXINMccHCNqbBuxLm0FxZZXcmRV18fcGcs6a33lb_RrnHBGNHgyCw39Az17T3D262M4I6iU2zBr-m2oXlSHPtegyxozvbBu17k7e9cXCMvXlPOvcIAcIav2YOHLmmx0hplwnILH2pNr1_fwRq2sBQYaXCUamI7KogHmIM4d8CEe-NguPJLJiC" sx={{ width: 96, height: 96 }} />
        <Box>
          <Typography variant="h5" fontWeight="bold">{usuario.first_name + " " + usuario.last_name}</Typography>
          <Typography color="text.secondary">{usuario.email}</Typography>
        </Box>
      </Box>
      <Button variant="outlined" color="primary">Cambiar Foto</Button>
    </Box>
  );
}
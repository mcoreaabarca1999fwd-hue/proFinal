import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { patchData } from "../../servicios/fetch";

export default function EditUserModal({ open, onClose, user }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });

  /* =====================
     CARGAR USUARIO
  ===================== */
  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name ?? "",
        last_name: user.last_name ?? "",
        birth_date: user.birth_date ?? "",
        username: user.username ?? "",
        email: user.email ?? "",
        role: user.role ?? "",
        password: "",
      });
    }
  }, [user]);

  /* =====================
     HANDLE CHANGE
  ===================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    if (!user?.id) return;

    // eliminamos password si viene vacío
    const payload = { id_usuario: user.id, ...form };
    if (!payload.password) delete payload.password;

    const response = await patchData(
      `usuarios/editar-usuario/`,
      payload
    );

    console.log("Respuesta PATCH:", response);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Editar Usuario
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Actualiza la información del usuario seleccionado.
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Apellidos"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              name="birth_date"
              value={form.birth_date}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre de Usuario"
              name="username"
              value={form.username}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Correo Electrónico"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Rol de Usuario"
              name="role"
              select
              value={form.role}
              onChange={handleChange}
              fullWidth
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="profesional">Profesional</MenuItem>
              <MenuItem value="usuario">Usuario</MenuItem>
              <MenuItem value="moderador">Moderador</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Nueva Contraseña (opcional)"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              helperText="Dejar en blanco para mantener la contraseña actual"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
}

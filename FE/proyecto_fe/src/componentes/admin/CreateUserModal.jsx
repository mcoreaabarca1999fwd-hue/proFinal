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
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { postData } from "../../servicios/fetch";

export default function CreateUserModal({ open, onClose }) {
  /* =======================
     ESTADOS
  ======================= */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [bio, setBio] = useState("");

  /* =======================
     CREAR USUARIO
  ======================= */
  async function crearUsuario() {
    const objUsuario = {
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      role,
      password,
      fecha_nacimiento: fechaNacimiento,
      bio,
    };

    try {
      const peticion = await postData(
        "usuarios/crear-usuario/",
        objUsuario
      );
      console.log("Usuario creado:", peticion);
      onClose();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }

  const labelSx = {
    textAlign: "center",
    width: "100%",
    color: "#6A1B9A",
    fontWeight: 600,
    fontSize: 14,
  };

  const inputRootSx = {
    borderRadius: 3,
    bgcolor: "#fff",
    "&:hover": { borderColor: "#9947eb" },
    "&.Mui-focused": {
      borderColor: "#9947eb",
      boxShadow: "0 0 0 2px rgba(153,71,235,0.2)",
    },
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      {/* HEADER */}
      <DialogTitle>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Crear Nuevo Usuario
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Complete la información para registrar un nuevo miembro.
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* BODY */}
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Apellidos"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              fullWidth
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre de Usuario"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Rol de Usuario"
              select
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              SelectProps={{ IconComponent: ExpandMoreIcon }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            >
              <MenuItem value="" disabled>
                Seleccionar Rol...
              </MenuItem>
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="profesional">Profesional</MenuItem>
              <MenuItem value="usuario">Usuario</MenuItem>
              <MenuItem value="moderador">Moderador</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña Temporal"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ shrink: true, sx: labelSx }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": inputRootSx }}
            />
          </Grid>
        </Grid>
      </DialogContent>

      {/* FOOTER */}
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={crearUsuario}>
          Crear Usuario
        </Button>
      </DialogActions>
    </Dialog>
  );
}

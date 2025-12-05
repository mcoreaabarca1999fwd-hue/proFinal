import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function RolesTable() {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      nombre: "Carlos Pérez",
      correo: "carlos.perez@example.com",
      moderador: false,
      admin: false,
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      correo: "ana.gomez@example.com",
      moderador: true,
      admin: false,
    },
    {
      id: 3,
      nombre: "Luis Rivera",
      correo: "luis.rivera@example.com",
      moderador: false,
      admin: true,
    },
    {
      id: 4,
      nombre: "María López",
      correo: "maria.lopez@example.com",
      moderador: false,
      admin: false,
    },
  ]);

  const filteredUsers = users.filter(
    (u) =>
      u.nombre.toLowerCase().includes(search.toLowerCase()) ||
      u.correo.toLowerCase().includes(search.toLowerCase())
  );

  const toggleRole = (id, field) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              [field]: !u[field],
            }
          : u
      )
    );
  };

  return (
    <Box sx={{ width: "100%", p: 4 }}>
      {/* Título */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Gestión de Roles y Reconocimientos
      </Typography>

      {/* BUSCADOR */}
      <TextField
        fullWidth
        placeholder="Buscar usuarios..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 3,
          background: "#fff",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#6b7280" }} />
            </InputAdornment>
          ),
        }}
      />

      {/* TABLA */}
      <Paper sx={{ overflow: "hidden", borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f3f4f6" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Usuario</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Correo</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Moderador
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Admin
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "#fafafa" },
                }}
              >
                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.correo}</TableCell>

                {/* Switch Moderador */}
                <TableCell align="center">
                  <Switch
                    checked={user.moderador}
                    onChange={() => toggleRole(user.id, "moderador")}
                    color="secondary"
                  />
                </TableCell>

                {/* Switch Admin */}
                <TableCell align="center">
                  <Switch
                    checked={user.admin}
                    onChange={() => toggleRole(user.id, "admin")}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}

            {filteredUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  No se encontraron usuarios
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
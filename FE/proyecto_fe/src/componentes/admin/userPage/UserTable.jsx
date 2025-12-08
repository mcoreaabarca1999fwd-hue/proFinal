import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { getData } from "../../../servicios/fetch";

export default function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getData(`usuarios/crear-usuario/${localStorage.getItem('idUsuario')}/`);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        
        setUsers([
          {
            id: 1,
            name: "Ana Torres",
            email: "ana.torres@example.com",
            role: "Admin",
            status: "Activo",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          },
        ]);
      }
    };
    fetchUsers();
  }, []);

  const getStatusColor = (status) => {
    return status === "Activo" ? "success" : "default";
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
      <Table>
        {/* ENCABEZADO */}
        <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            <TableCell><strong>Usuario</strong></TableCell>
            <TableCell><strong>Correo</strong></TableCell>
            <TableCell><strong>Rol</strong></TableCell>
            <TableCell><strong>Estado</strong></TableCell>
            <TableCell align="center"><strong>Acciones</strong></TableCell>
          </TableRow>
        </TableHead>

        {/* CUERPO */}
        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id} hover>
              {/* Usuario + Avatar */}
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={u.avatar} />
                  <Typography fontWeight={500}>{u.name}</Typography>
                </Box>
              </TableCell>

              {/* Correo */}
              <TableCell>{u.email}</TableCell>

              {/* ROL */}
              <TableCell>
                <Chip
                  label={u.role}
                  color={u.role === "Admin" ? "secondary" : "primary"}
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </TableCell>

              {/* ESTADO */}
              <TableCell>
                <Chip
                  label={u.status}
                  color={getStatusColor(u.status)}
                  variant="outlined"
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </TableCell>

              {/* ACCIONES */}
              <TableCell align="center">
                <IconButton color="primary" size="small">
                  <EditIcon />
                </IconButton>
                <IconButton color="error" size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
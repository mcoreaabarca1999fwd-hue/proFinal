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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { deleteData, getData } from "../../../servicios/fetch";
import EditUserModal from "../EditUserModal";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      const users = await getData(`usuarios/crear-usuario/`);
      setUsers(users);
    }
    fetchUsers();
  }, []);

  const getStatusColor = (status) => {
    return status === "Activo" ? "success" : "default";
  };

  const handleOpenDeleteDialog = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleConfirmDelete = async () => {
    console.log("Eliminar usuario:", selectedUser);
    const peticion = await deleteData('usuarios/eliminar-usuario', selectedUser.id);
    console.log(peticion);
    handleCloseDialog();
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
            <TableRow>
              <TableCell><strong>Usuario</strong></TableCell>
              <TableCell><strong>Correo</strong></TableCell>
              <TableCell><strong>Rol</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id} hover>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={u.avatar} />
                    <Typography fontWeight={500}>{u.username}</Typography>
                  </Box>
                </TableCell>

                <TableCell>{u.email}</TableCell>

                <TableCell>
                  <Chip
                    label={u.rol}
                    color={u.rol === "Admin" ? "secondary" : "primary"}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={u.is_active ? "Activo" : "Inactivo"}
                    color={getStatusColor(u.is_active ? "Activo" : "Inactivo")}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton color="primary" size="small">
                    <EditIcon
                      onClick={() => {
                        localStorage.setItem("editUserId", u.id);
                        setSelectedUser(u);
                        setOpenEdit(true);
                      }}
                    />
                  </IconButton>

                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => handleOpenDeleteDialog(u)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <EditUserModal open={openEdit} onClose={() => setOpenEdit(false)} user={selectedUser} />
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔴 DIALOG CONFIRMACIÓN */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>¿Eliminar usuario?</DialogTitle>

        <DialogContent>
          <Typography>
            ¿Estás seguro de que deseas eliminar al usuario{" "}
            <strong>{selectedUser?.username}</strong>?
            <br />
            Esta acción no se puede deshacer.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>
            Cancelar
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

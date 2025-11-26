import { Box } from "@mui/material";

import Sidebar from "../../componentes/admin/userPage/Sidebar.jsx";
import Header from "../../componentes/admin/userPage/Header.jsx";
import SearchBar from "../../componentes/admin/userPage/SearchBar.jsx";
import UserTable from "../../componentes/admin/userPage/UserTable.jsx";
import PaginationControls from "../../componentes/admin/userPage/PaginationControls.jsx";

import { useState } from "react";

export default function UsersPage() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ display: "flex" }}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { xs: 0, sm: "250px" }, // espacio por el sidebar
        }}
      >
        {/* HEADER */}
        <Header />

        {/* BUSCADOR + BOTÓN */}
        <SearchBar />

        {/* TABLA */}
        <UserTable />

        {/* PAGINACIÓN */}
        <PaginationControls
          page={page}
          totalPages={5}
          onChange={(value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}
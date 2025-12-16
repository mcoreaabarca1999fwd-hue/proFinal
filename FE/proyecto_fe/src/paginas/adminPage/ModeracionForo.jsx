import { Box, Typography } from "@mui/material";
import Sidebar from "../../componentes/admin/Sidebar";
import FiltersBar from "../../componentes/admin/moderacion/FiltersBar";
import ReportTable from "../../componentes/admin/moderacion/ReportTable";
import { useState, useMemo, useEffect } from "react";
import { getData } from "../../servicios/fetch";

export default function ForumModerationPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos los reportes");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const [foro, setForo] = useState([]);

  useEffect(() => {
    async function traerForo() {
      const peticion = await getData("foro/publicacion/");
      setForo(peticion || []);
    }
    traerForo();
  }, []);

  // 🔁 Adaptamos los datos reales al formato que espera ReportTable
  const mappedForo = useMemo(() => {
    return foro.map((item, index) => ({
      id: item.id || index + 1,
      content: `"${item.contenido}"`,
      subtitle: `Etiquetas '${item.etiquetaForo}'`,
      user: item.nombre_usuario   || "Usuario desconocido",
      avatar: item.Usuario?.avatar || "https://www.svgrepo.com/show/382106/user-avatar.svg",
      reason: item.titulo,
      date: item.fecha_creacion?.split("T")[0],
      status: "Pendiente",
    }));
  }, [foro]);

  const filtered = useMemo(() => {
    let arr = mappedForo.slice();

    if (filter === "Pendientes") {
      arr = arr.filter((r) =>
        r.status.toLowerCase().includes("pendient")
      );
    }

    if (filter === "Resueltos") {
      arr = arr.filter((r) =>
        r.status.toLowerCase().includes("resuelt")
      );
    }

    if (filter === "Publicaciones") {
      arr = arr.filter((r) => /publicación/i.test(r.subtitle));
    }

    if (filter === "Comentarios") {
      arr = arr.filter((r) => /comentario/i.test(r.subtitle));
    }

    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter((r) =>
        (r.content + r.user + r.reason)
          .toLowerCase()
          .includes(s)
      );
    }

    return arr;
  }, [search, filter, mappedForo]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / perPage)
  );

  const pageData = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleAction = (item, action) => {
    alert(`Acción "${action}" sobre ID: ${item.id}`);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box component="main" sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight={800}>
          Contenido del Foro
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Revisa y gestiona publicaciones y comentarios
        </Typography>

        <FiltersBar
          value={search}
          onSearch={setSearch}
          filter={filter}
          onFilter={setFilter}
        />

        <ReportTable
          data={pageData}
          page={page}
          totalPages={totalPages}
          onPageChange={(v) => setPage(v)}
          onAction={handleAction}
        />
      </Box>
    </Box>
  );
}

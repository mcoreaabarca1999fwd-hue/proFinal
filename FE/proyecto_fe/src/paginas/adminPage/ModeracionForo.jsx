import { Box, Typography } from "@mui/material";
import Sidebar from "../../componentes/admin/moderacion/Sidebar";
import FiltersBar from "../../componentes/admin/moderacion/FiltersBar";
import ReportTable from "../../componentes/admin/moderacion/ReportTable";
import { useState, useMemo } from "react";

/* ejemplo de datos (copiá a /src/data/reports.js si querés) */
const MOCK = [
  {
    id: 1,
    content: '"¿Alguien más experimenta dolores..."',
    subtitle: "Publicación en 'Síntomas'",
    user: "Sofía Reyes",
    avatar: "https://i.pravatar.cc/48?img=65",
    reason: "Spam / Publicidad",
    date: "2023-10-26",
    status: "Pendiente",
  },
  {
    id: 2,
    content: '"Este comentario es ofensivo y no..."',
    subtitle: "Comentario en 'Mi Experiencia'",
    user: "Valeria Gómez",
    avatar: "https://i.pravatar.cc/48?img=12",
    reason: "Acoso / Discurso de odio",
    date: "2023-10-25",
    status: "Pendiente",
  },
  {
    id: 3,
    content: '"Recomiendo este producto milagroso..."',
    subtitle: "Publicación en 'Remedios'",
    user: "Isabella Castillo",
    avatar: "https://i.pravatar.cc/48?img=45",
    reason: "Spam / Publicidad",
    date: "2023-10-24",
    status: "Resuelto (Eliminado)",
  },
  {
    id: 4,
    content: '"¿Es normal tener cólicos una semana..."',
    subtitle: "Publicación en 'Dudas Generales'",
    user: "Camila Moreno",
    avatar: "https://i.pravatar.cc/48?img=33",
    reason: "Contenido irrelevante",
    date: "2023-10-23",
    status: "Resuelto (Aprobado)",
  },
  {
    id: 5,
    content: '"Información falsa sobre ciclos..."',
    subtitle: "Comentario en 'Artículos'",
    user: "Luciana Vargas",
    avatar: "https://i.pravatar.cc/48?img=10",
    reason: "Desinformación",
    date: "2023-10-22",
    status: "Pendiente",
  },
];

export default function ForumModerationPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos los reportes");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    let arr = MOCK.slice();
    if (filter === "Pendientes") arr = arr.filter((r) => r.status.toLowerCase().includes("pendient"));
    if (filter === "Resueltos") arr = arr.filter((r) => r.status.toLowerCase().includes("resuelt"));
    if (filter === "Publicaciones") arr = arr.filter((r) => /publicación/i.test(r.subtitle));
    if (filter === "Comentarios") arr = arr.filter((r) => /comentario/i.test(r.subtitle));
    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter((r) => (r.content + r.user + r.reason).toLowerCase().includes(s));
    }
    return arr;
  }, [search, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const handleAction = (item, action) => {
    // placeholder: acá conectás con API o abrís modal
    // console.log("acción", action, "sobre", item);
    alert(`Acción "${action}" sobre ID: ${item.id}`);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box component="main" sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight={800}>Moderación del Foro</Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Revisa y gestiona publicaciones y comentarios reportados.
        </Typography>

        <FiltersBar value={search} onSearch={setSearch} filter={filter} onFilter={setFilter} />

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
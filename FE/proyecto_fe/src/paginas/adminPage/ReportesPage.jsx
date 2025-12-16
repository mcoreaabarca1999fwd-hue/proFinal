import { Box, Typography } from "@mui/material";
import Sidebar from "../../componentes/admin/Sidebar";
import FiltersBar from "../../componentes/admin/moderacion/FiltersBar";
import ReportTable from "../../componentes/admin/moderacion/ReportTable";
import ModalEditarPublicacion from "../../componentes/admin/moderacion/ModalEditarPublicacion";
import { useState, useMemo, useEffect } from "react";
import { getData } from "../../servicios/fetch";

export default function ReportesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos los reportes");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const [foro, setForo] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function traerForo() {
      const peticion = await getData("foro/publicacion/");
      setForo(peticion || []);
    }
    traerForo();
  }, []);

  /** 🔹 Mapeo para la tabla */
  const mappedForo = useMemo(() => {
    return foro.map((item, index) => ({
      id: item.id || index + 1,
      content: item.contenido,
      subtitle: `Etiquetas '${item.etiquetaForo || ""}'`,
      user: item.nombre_usuario || "Usuario desconocido",
      avatar: item.Usuario?.avatar || "https://i.pravatar.cc/48",
      reason: item.titulo,
      date: item.fecha_creacion?.split("T")[0],
      status: "Pendiente",
    }));
  }, [foro]);

  const filtered = useMemo(() => {
    let arr = [...mappedForo];
    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter((r) =>
        (r.content + r.user + r.reason).toLowerCase().includes(s)
      );
    }
    return arr;
  }, [search, mappedForo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  /** 🖊️ Click en editar */
  const handleAction = (item, action) => {
    if (action === "edit") {
      setSelectedItem(item);
      setOpenEdit(true);
    }
  };

  /** 💾 Guardar cambios del modal */
  const handleSaveEdit = (updatedItem) => {
    setForo((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id
          ? {
              ...item,
              titulo: updatedItem.title,
              contenido: updatedItem.content,
              etiquetaForo: updatedItem.tags.join(", "),
            }
          : item
      )
    );

    setOpenEdit(false);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box component="main" sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight={800}>
          Contenido del Foro
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
          onPageChange={setPage}
          onAction={handleAction}
        />
      </Box>

      {selectedItem && (
        <ModalEditarPublicacion
          open={openEdit}
          initialData={selectedItem}
          onClose={() => setOpenEdit(false)}
          onSave={handleSaveEdit}
        />
      )}
    </Box>
  );
}

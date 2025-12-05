import RolesTable from "../../componentes/admin/roles/RolesTable";
import Sidebar from "../../componentes/admin/Sidebar";

export default function RolesPage() {
  return (
    <div style={{ display: "flex" }}>
      
      {/* SIDEBAR A LA IZQUIERDA */}
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ flex: 1, padding: "20px" }}>
        <RolesTable />
      </div>

    </div>
  );
}
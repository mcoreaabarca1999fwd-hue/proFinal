import {
Dialog,
DialogContent,
Box,
Typography,
IconButton,
TextField,
Button,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";


export default function ModalCiclo({ open, onClose }) {
return (
<Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
<DialogContent sx={{ p: 0, display: "flex", flexDirection: { md: "row", xs: "column" } }}>
{/* LEFT CALENDAR PANEL */}
<Box sx={{ flex: 1, p: 3, borderRight: { md: "1px solid #ddd" } }}>
<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
<IconButton><ChevronLeftIcon /></IconButton>
<Typography fontWeight="bold">Septiembre 2024</Typography>
<IconButton><ChevronRightIcon /></IconButton>
</Box>


{/* Calendar Grid */}
<Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0.5 }}>
{["L", "M", "M", "J", "V", "S", "D"].map((d) => (
<Typography key={d} align="center" sx={{ fontSize: 13, fontWeight: "bold", color: "#636388" }}>{d}</Typography>
))}
{/* Days */}
{[...Array(30)].map((_, i) => (
<Button key={i} sx={{ minWidth: 0, height: 48 }}>{i + 1}</Button>
))}
</Box>
</Box>


{/* RIGHT PANEL */}
<Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<Typography variant="h6" fontWeight="bold">Editar Fechas del Ciclo</Typography>
<IconButton onClick={onClose}><CloseIcon /></IconButton>
</Box>


<Typography sx={{ color: "#636388", mb: 3 }}>Selecciona las fechas de inicio y fin en el calendario.</Typography>


<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
<Box>
<Typography fontSize={14} fontWeight={600} mb={1}>Inicio de la Menstruación</Typography>
<TextField fullWidth value="05 Septiembre, 2024" />
</Box>


<Box>
<Typography fontSize={14} fontWeight={600} mb={1}>Fin de la Menstruación</Typography>
<TextField fullWidth value="08 Septiembre, 2024" />
</Box>
</Box>


{/* Legend */}
<Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 3 }}>
<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
<Box sx={{ width: 16, height: 16, bgcolor: "#f9c2d9", borderRadius: "50%", border: "2px solid white" }} />
<Typography fontSize={14}>Periodo Menstrual</Typography>
</Box>


<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
<Box sx={{ width: 16, height: 16, bgcolor: "#d9c8f5", borderRadius: "50%", border: "2px solid white" }} />
<Typography fontSize={14}>Ventana Fértil</Typography>
</Box>


<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
<Box sx={{ width: 8, height: 8, bgcolor: "#b48cff", borderRadius: "50%", ml: 1 }} />
<Typography fontSize={14}>Día de Ovulación</Typography>
</Box>
</Box>


{/* Buttons */}
<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
<Button variant="outlined">Cancelar</Button>
<Button variant="contained" sx={{ bgcolor: "#9947eb" }}>Guardar Cambios</Button>
</Box>
</Box>
</DialogContent>
</Dialog>
);
}
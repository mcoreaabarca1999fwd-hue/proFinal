// src/components/Main.jsx
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkIcon from "@mui/icons-material/Link";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Main() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        py: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1100 }}>
        {/* VOLVER */}
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ fontWeight: "bold", color: "#8a3dda" }}
          >
            Volver a Artículos
          </Button>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 900,
              color: "#181115",
            }}
          >
            Crear Nuevo Artículo Educativo
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { lg: "2fr 1fr" },
            gap: 4,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* TITLE */}
            <Card sx={{ border: "1px solid #e5dce3" }}>
              <CardContent>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold", mb: 1 }}>
                  Título del Artículo
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Ej: Entendiendo las Fases de tu Ciclo"
                  size="small"
                />
              </CardContent>
            </Card>

            {/* BODY EDITOR */}
            <Card sx={{ border: "1px solid #e5dce3" }}>
              <CardContent>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold", mb: 2 }}>
                  Cuerpo del Artículo
                </Typography>

                <Box
                  sx={{
                    border: "1px solid #e5dce3",
                    borderRadius: 2,
                  }}
                >
                  {/* EDITOR TOOLS */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      borderBottom: "1px solid #e5dce3",
                      p: 1,
                      background: "#f4f0f3",
                    }}
                  >
                    <IconButton><FormatBoldIcon /></IconButton>
                    <IconButton><FormatItalicIcon /></IconButton>
                    <IconButton><FormatListBulletedIcon /></IconButton>
                    <IconButton><FormatListNumberedIcon /></IconButton>
                    <IconButton><FormatQuoteIcon /></IconButton>
                    <IconButton><LinkIcon /></IconButton>
                  </Box>

                  {/* TEXTAREA */}
                  <textarea
                    placeholder="Escribe el contenido aquí..."
                    style={{
                      width: "100%",
                      minHeight: "240px",
                      border: "none",
                      padding: "16px",
                      fontSize: "1rem",
                      outline: "none",
                      background: "white",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* PUBLICACIÓN */}
            <Card sx={{ border: "1px solid #e5dce3" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Publicación
                </Typography>

                {/* Autor */}
                <Box>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold", mb: 1 }}>
                    Autor
                  </Typography>
                  <TextField fullWidth placeholder="Autor" size="small" />
                </Box>

                {/* Estado */}
                <Box>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold", mb: 1 }}>
                    Estado
                  </Typography>
                  <Select fullWidth defaultValue="Borrador" size="small">
                    <MenuItem>Borrador</MenuItem>
                    <MenuItem>Publicado</MenuItem>
                  </Select>
                </Box>

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
                  <Button fullWidth sx={{ background: "#f4f0f3", fontWeight: "bold" }}>
                    Guardar Borrador
                  </Button>

                  <Button fullWidth variant="contained" sx={{ background: "#9947eb" }}>
                    Publicar
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* CATEGORÍAS */}
            <Card sx={{ border: "1px solid #e5dce3" }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>Categorías</Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  <Box sx={chip}>Ciclo Menstrual</Box>
                  <Box sx={chip}>Nutrición</Box>
                  <Box sx={{ ...chipActive }}>Salud Hormonal</Box>
                  <Box sx={chip}>Ejercicio</Box>
                </Box>

                <Button sx={{ mt: 1, color: "#9947eb", fontWeight: "bold" }}>
                  + Añadir nueva categoría
                </Button>
              </CardContent>
            </Card>

            {/* IMAGEN */}
            <Card sx={{ border: "1px solid #e5dce3" }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Imagen Destacada
                </Typography>

                <Box
                  sx={{
                    border: "2px dashed #e5dce3",
                    height: 160,
                    borderRadius: 2,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fafafa",
                  }}
                >
                  <UploadFileIcon sx={{ fontSize: 40, color: "#88637c" }} />
                  <Typography sx={{ fontSize: "0.9rem", color: "#88637c" }}>
                    Arrastra una imagen o <b style={{ color: "#9947eb" }}>haz clic para subir</b>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* CHIPS */
const chip = {
  background: "#f4f0f3",
  px: 2,
  py: 0.5,
  borderRadius: 20,
  fontSize: "0.85rem",
};

const chipActive = {
  ...chip,
  background: "rgba(235, 71, 180, 0.2)",
  color: "#8a3dda",
};
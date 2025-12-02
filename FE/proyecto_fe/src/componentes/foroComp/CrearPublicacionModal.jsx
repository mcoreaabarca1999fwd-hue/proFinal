import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { postData } from "../../servicios/fetch";
export default function CrearPublicacionModal({ open, onClose }) {
  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const [hashtags, setHashtags] = useState('')


  async function guardarPublicacion() {
      const objPublicacion = {
          titulo: titulo,
          contenido: contenido,
          etiquetaForo: hashtags,
          Usuario:localStorage.getItem('idUsuario')
      }
      const respuesta = await postData(`foro/publicacion/`, objPublicacion)
      console.log(respuesta);
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: 10,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      > <Typography variant="h6" fontWeight={700}>
          Crear Nueva Publicación </Typography>

        ```
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pt: 3,
        }}
      >
        {/* Avatar + textarea */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4okgjxNtgqAZb2nw-EMJYxKz9YRXZc3XC1T9C9FEQ7svDusTZyLyPg6YTmsqV854ErD47RhnXnrkJtNxCEhSwBUIS1qq9sJRD4mw1okRHsRRBC3NO3S9hwAezUtLGNiexA91_8vO-Uw9VcxvbJTpdDj9FKaTfWbB5aNHqHAP0WNUJRIQ5pkBVlS6zEuDjG8hDPlGp43-fpp6U0fEOzhoIUS63oyGQUp0UafQUZr_9HqKGRoexeo3kB2tg49YX-pmudeOXKL9NrUOQ"
            sx={{ width: 40, height: 40 }}
          />

          <TextField
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="¿Qué estás pensando, Sofia?"
            multiline
            minRows={5}
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "1rem",
                color: "text.primary",
              },
            }}
          />
        </Box>
        {/* Contenido */}
        <TextField
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Añade el contenido de tu publicación aquí..."
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        {/* Hashtags */}
        <TextField
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          placeholder="Añade hashtags (ej: #SaludMenstrual, #Consejos)"
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </DialogContent>

      {/* Footer */}
      <DialogActions
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "background.default",
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: "grey.300",
            color: "text.primary",
            "&:hover": {
              bgcolor: "grey.400",
            },
            borderRadius: 2,
            textTransform: "none",
            flex: 1,
            maxWidth: { sm: "fit-content" },
          }}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            bgcolor: "#9947eb",
            "&:hover": {
              bgcolor: "#8A3DDA",
            },
            borderRadius: 2,
            textTransform: "none",
            flex: 1,
            maxWidth: { sm: "fit-content" },
          }}
          onClick={guardarPublicacion}
        >
          Publicar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

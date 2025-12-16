import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LinkIcon from "@mui/icons-material/Link";

export default function ModalEditarPublicacion({
  open,
  onClose,
  onSave,
  initialData
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.reason || "");
      setContent(initialData.content || "");
      setTags(
        initialData.subtitle
          ? initialData.subtitle.replace("Etiquetas '", "").replace("'", "").split(",")
          : []
      );
    }
  }, [initialData]);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((t) => t !== tagToDelete));
  };

  const handleSave = () => {
    onSave?.({
      ...initialData,
      title,
      content,
      tags
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "primary.light",
        }}
      >
        <Typography fontWeight={700}>Editar Publicación</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Título de la Publicación"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />

        <Box>
          <Typography variant="body2" fontWeight={500} mb={1}>
            Descripción
          </Typography>

          <Box sx={{ display: "flex", gap: 1, p: 1, border: "1px solid", borderColor: "divider", borderRadius: 1 }}>
            <IconButton size="small"><FormatBoldIcon fontSize="small" /></IconButton>
            <IconButton size="small"><FormatItalicIcon fontSize="small" /></IconButton>
            <IconButton size="small"><FormatUnderlinedIcon fontSize="small" /></IconButton>
            <IconButton size="small"><FormatListBulletedIcon fontSize="small" /></IconButton>
            <IconButton size="small"><LinkIcon fontSize="small" /></IconButton>
          </Box>

          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={6}
            fullWidth
            sx={{ mt: 1 }}
          />
        </Box>

        <Box>
          <Typography variant="body2" fontWeight={500} mb={1}>
            Etiquetas (Tags)
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => handleDeleteTag(tag)}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Stack>

          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Añadir etiqueta"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
              fullWidth
            />
            <IconButton color="primary" onClick={handleAddTag}>
              <AddCircleIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import { Avatar, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { postData } from "../../servicios/fetch";

export default function CommentInput({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async() => {
    if (!comment.trim()) return;
    const commentData = {
      Usuario: localStorage.getItem('idUsuario'),
      contenido: comment.trim(),
      Publicacion: localStorage.getItem("idPublicacion")
    }
    const peticion = await postData("foro/comentario/", commentData);
    console.log(peticion);
    if (onAddComment) {
      onAddComment(comment);
    }
    // Limpiamos el campo
    setComment("");
  };

  return (
    <Box display="flex" gap={2}>
      <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0KXkuOr..." />

      <Box flex={1}>
        <TextField
          multiline
          rows={2}
          fullWidth
          placeholder="Añade tu comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8a3dda",
            mt: 1,
            ml: "auto",
            display: "block",
            borderRadius: 10,
          }}
          onClick={handleSubmit}
        >
          Comentar
        </Button>
      </Box>
    </Box>
  );
}

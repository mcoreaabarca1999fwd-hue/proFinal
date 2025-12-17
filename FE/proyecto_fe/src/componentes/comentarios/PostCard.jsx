import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { getData } from "../../servicios/fetch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useEffect, useState } from "react";

export default function PostCard({ usuario, fechaPublicacion, titulo, descripcion, tags }) {
  const [comentarios, setComentarios] = useState([]);

  useEffect(()=>{
    async function mostrarComentarios() {
      const peticion = await getData(`foro/comentarios-publicacion/${localStorage.getItem('idPublicacion')}/`)
      console.log(peticion)
      setComentarios(peticion)
    }
    mostrarComentarios()
  },[])
  return (
    <Card
      sx={{
        p: 2,
        mb: 4,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* HEADER */}
      <CardHeader
        avatar={
          <Avatar
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_AIGKo5..."
            sx={{ width: 48, height: 48 }}
          />
        }
        title={<Typography fontWeight={700} color="#333">{usuario}</Typography>}
        subheader={<Typography variant="body2" color="text.secondary">{fechaPublicacion}</Typography>}
        action={
          <IconButton sx={{ "&:hover": { bgcolor: "#f3f0f9" } }}>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h6" fontWeight={700} color="#222">
          {titulo}
        </Typography>

        <Typography mt={1} color="#555" lineHeight={1.6}>
          {descripcion}
        </Typography>

        {/* TAGS */}
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {(tags && tags.length > 0 ? tags : ["#SaludMenstrual", "#Consejos"]).map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              sx={{
                bgcolor: "#f3e8ff",
                color: "#6a1b9a",
                fontWeight: 600,
                borderRadius: 2,
              }}
            />
          ))}
        </Stack>

        {/* ACCIONES */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            px: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 4 }}>
            <Action icon={<FavoriteIcon sx={{ color: "#9947eb" }} />} label="∞" />
            <Action icon={<ChatBubbleOutlineIcon />} />
          </Box>
          <Action icon={<ShareIcon />} />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* INPUT PARA COMENTAR */}
        <CommentInput />

        {/* COMENTARIOS */}
        <Box mt={3}>
          <Typography fontWeight={700} mb={2}>
            Comentarios
          </Typography>

          {comentarios.map((comentario)=>{
            return(
              <Comment key={comentario.id} usuario={comentario.nombre_usuario} contenido={comentario.contenido} />
            )
          })}
        </Box>
      </CardContent>
    </Card>
  );
}

function Action({ icon, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": { color: "#9947eb" },
      }}
    >
      {icon}
      {label && <Typography fontSize={14}>{label}</Typography>}
    </Box>
  );
}

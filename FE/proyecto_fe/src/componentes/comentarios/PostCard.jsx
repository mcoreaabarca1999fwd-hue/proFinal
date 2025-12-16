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

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

import Comment from "./Comment";
import CommentInput from "./CommentInput";

export default function PostCard({usuario,fechaPublicacion,titulo,descripcion,tags}) {
  return (
    <Card sx={{ p: 2, mb: 4, borderRadius: 3 }}>
      {/* HEADER */}
      <CardHeader
        avatar={
          <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_AIGKo5..." />
        }
        title={<Typography fontWeight={700}>{usuario}</Typography>}
        subheader={<Typography variant="body2">{fechaPublicacion}</Typography>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h6" fontWeight={700}>
         {titulo}
        </Typography>

        <Typography mt={1}>
          {descripcion}
        </Typography>

        {/* TAGS */}
        <Stack direction="row" spacing={1} mt={2}>
          <Chip label="#SaludMenstrual" />
          <Chip label="#Consejos" />
        </Stack>

        {/* ACCIONES */}
        

        <Divider sx={{ my: 3 }} />

        {/* INPUT PARA COMENTAR */}
        <CommentInput />

        {/* COMENTARIOS */}
        <Box mt={3}>
          <Typography fontWeight={700} mb={2}>
            Comentarios
          </Typography>

          <Comment />
        </Box>
      </CardContent>
    </Card>
  );
}
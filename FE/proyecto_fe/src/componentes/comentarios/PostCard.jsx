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

export default function PostCard() {
  return (
    <Card sx={{ p: 2, mb: 4, borderRadius: 3 }}>
      {/* HEADER */}
      <CardHeader
        avatar={
          <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_AIGKo5..." />
        }
        title={<Typography fontWeight={700}>Ana G.</Typography>}
        subheader="hace 5 minutos"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h6" fontWeight={700}>
          ¿Alguien más siente más antojos durante la fase lútea?
        </Typography>

        <Typography mt={1}>
          Últimamente he notado que me apetece mucho el dulce justo antes de la regla…
        </Typography>

        {/* TAGS */}
        <Stack direction="row" spacing={1} mt={2}>
          <Chip label="#SaludMenstrual" />
          <Chip label="#Consejos" />
        </Stack>

        {/* ACCIONES */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton>
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography>125</Typography>

            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography>42</Typography>
          </Stack>

          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* INPUT PARA COMENTAR */}
        <CommentInput />

        {/* COMENTARIOS */}
        <Box mt={3}>
          <Typography fontWeight={700} mb={2}>
            Comentarios
          </Typography>

          <Comment />
          <Comment />
        </Box>
      </CardContent>
    </Card>
  );
}
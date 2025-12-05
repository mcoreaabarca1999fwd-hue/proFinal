import { Box, Typography, Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";

export default function PostCard({
  user,
  time,
  title,
  text,
  tags,
  likes,
  comments,
  avatar,
  liked,
}) 
{
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid #e5e7eb",
        width: "300%",
        p: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Usuario */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar src={avatar} />

          <Box>
            <Typography fontSize={14} fontWeight={700}>
              {user}
            </Typography>
            <Typography fontSize={12} color="#88636f">
              {formatTime(time)}
            </Typography>
          </Box>
        </Box>

        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>

      {/* Contenido */}
      <Box>
        <Typography fontSize={20} fontWeight={700} mb={1}>
          {title}
        </Typography>

        <Typography fontSize={14} color="#555">
          {text}
        </Typography>
      </Box>

      {/* Tags */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {tags?.map((t, i) => (
          <Box
            key={i}
            sx={{
              px: 2,
              py: 0.5,
              borderRadius: 10,
              fontSize: 12,
              bgcolor: "#E6E0F8",
            }}
          >
            {t}
          </Box>
        ))}
      </Box>

      {/* Acciones */}
      <Box
        sx={{
          borderTop: "1px solid #e5e7eb",
          pt: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 4 }}>
          <Action icon={<FavoriteIcon />} label={likes} active={liked} />
          <Action icon={<ChatBubbleIcon />} label={comments} />
        </Box>

        <Action icon={<ShareIcon />} />
      </Box>
    </Box>
  );
}

function Action({ icon, label, active }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
      <Box sx={{ color: active ? "#eb477e" : "#555" }}>{icon}</Box>
      {label && <Typography fontSize={14}>{label}</Typography>}
    </Box>
  );
}

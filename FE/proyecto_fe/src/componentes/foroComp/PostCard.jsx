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
  verComentarios,
}) {
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid #e5e7eb",
        width: "100%",
        p: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Usuario */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar src={avatar} sx={{ width: 48, height: 48 }} />

          <Box>
            <Typography fontSize={15} fontWeight={700} color="#333">
              {user}
            </Typography>
            <Typography fontSize={12} color="#88636f">
              {formatTime(time)}
            </Typography>
          </Box>
        </Box>

        <IconButton sx={{ "&:hover": { bgcolor: "#f3f0f9" } }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>

      {/* Contenido */}
      <Box>
        <Typography fontSize={22} fontWeight={700} mb={1} color="#222">
          {title}
        </Typography>

        <Typography fontSize={15} color="#444" lineHeight={1.6}>
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
              borderRadius: 20,
              fontSize: 12,
              bgcolor: "#f3e8ff",
              color: "#6a1b9a",
              fontWeight: 600,
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
          <Action
            icon={<FavoriteIcon sx={{ color: liked ? "#9947eb" : "#555" }} />}
            label={likes}
            active={liked}
          />
          <Box onClick={verComentarios}>
            <Action icon={<ChatBubbleIcon />} label={comments} />
          </Box>
        </Box>

        <Action icon={<ShareIcon />} />
      </Box>
    </Box>
  );
}

function Action({ icon, label, active }) {
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
      <Box sx={{ color: active ? "#9947eb" : "inherit" }}>{icon}</Box>
      {label && <Typography fontSize={14}>{label}</Typography>}
    </Box>
  );
}

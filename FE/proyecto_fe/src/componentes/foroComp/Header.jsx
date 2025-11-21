import { Box, Typography, IconButton, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
export default function Header() {

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        bgcolor: "#fff",
        borderBottom: "1px solid #e5e7eb",
        px: 4,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo + Nombre */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box sx={{ width: 28, height: 28, color: "#eb477e" }}>
          <svg viewBox="0 0 48 48" fill="currentColor">
            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
          </svg>
        </Box>

        <Typography fontSize="20px" fontWeight="700">
          AlmaFloral
        </Typography>
      </Box>

      {/* Menú */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 6 }}>
        <Typography sx={{ fontSize: 14 }}>Calendario</Typography>
        <Typography sx={{ fontSize: 14 }}>Síntomas</Typography>
        <Typography sx={{ fontSize: 14, color: "#eb477e", fontWeight: "700" }}>
          Foro
        </Typography>
        <Typography sx={{ fontSize: 14 }}>Artículos</Typography>
      </Box>

      {/* Notificación + Avatar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton sx={{ bgcolor: "#f3f3f3" }}>
          <NotificationsIcon />
        </IconButton>
        <div onClick={()=>{
          navigate('/perfil')
        }}>
        <Avatar
          
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4okgjxNtgqAZb2nw-EMJYxKz9YRXZc3XC1T9C9FEQ7svDusTZyLyPg6YTmsqV854ErD47RhnXnrkJtNxCEhSwBUIS1qq9sJRD4mw1okRHsRRBC3NO3S9hwAezUtLGNiexA91_8vO-Uw9VcxvbJTpdDj9FKaTfWbB5aNHqHAP0WNUJRIQ5pkBVlS6zEuDjG8hDPlGp43-fpp6U0fEOzhoIUS63oyGQUp0UafQUZr_9HqKGRoexeo3kB2tg49YX-pmudeOXKL9NrUOQ"
        />
        </div>
      </Box>
    </Box>
  );
}

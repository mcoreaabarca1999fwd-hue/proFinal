import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
  return (
    <AppBar position="sticky" elevation={0} sx={{
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid #e4dbe6",
      color: "#3C3242",
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box sx={{ color: "var(--primary-dark)" }}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 48 48">
              <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
            </svg>
          </Box>
          <Typography variant="h6" fontWeight="bold">AlmaFloral</Typography>
        </Box>

        {/* Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          <Avatar
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvpMilhfJ7CFMV8i0CkZFydByLmBbVHJerYNyGV_7dOScn_ohfQos7s6JChV-TmuicLr9R666N00zuPbJWswdpu04HUR1TCgq_LHTRybQCUzEbX6YOCRTQkt6M548c5Q5cpQGlscEGIQW_g48bqe1yGkgte9mhenxe5tsGkWwvW70y8VWEUGzMKw4zREOvNlhHbjTnN4vqv9Zp7oLS-HoxyW3PSsaZPKbgwjgk4lkKp3mzE1cjpGn5avsToOmuD-bhm-9WbaqMM3LT"
            sx={{ width: 40, height: 40 }}
          />
        </Box>

      </Toolbar>
    </AppBar>
  );
}

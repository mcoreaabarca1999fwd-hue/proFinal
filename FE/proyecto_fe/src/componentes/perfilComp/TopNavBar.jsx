import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Toolbar, Typography, Button, Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function TopNavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" color="default" sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <svg fill="none" viewBox="0 0 48 48" width={40} height={40}>
            <g clipPath="url(#clip0_6_330)">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"/>
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect fill="white" width="48" height="48"/>
              </clipPath>
            </defs>
          </svg>
          <Typography variant="h6">AlmaFloral</Typography>
        </Box>

        <Box display={{ xs: "none", md: "flex" }} gap={2}>
          <Button>Calendario</Button>
          {/* <Button
            
          >Reportes</Button> */}
          <Button
          onClick={()=>{
              navigate('/foro')
            }}>Comunidad</Button>
          <Button variant="contained" color="primary">Ajustes</Button>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Button><NotificationsIcon /></Button>
          <Avatar alt="Ana Pérez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7SR4aIO4HAHEKRvDB-sd3RoY8kkDGJ8FXX_exaWAJPTLuje2C_ci0PZMd2t1bMetX2jjEGxXeySIGGKE7FVXspuY6T0pZ6Y-4VHgFMFNcdyacZK3Wma_vCd7RSOXZ6GboTRjhMv_Tx-gUf21Cah6kmL7Gym2VN1P2uHV5H_LwLNzg2ql48D7GS6RGbCt8sPoxXOIrzDUfEOq_iefLmtGg6-lluE0B8XmSixbevfBXPpXjrLmqWjkq148-sKWVcFtjD-gQn3uBtZ3I" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
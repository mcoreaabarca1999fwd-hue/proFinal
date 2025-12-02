import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CommunitySection() {
  const navigate = useNavigate();
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }} display="grid" gridTemplateColumns={{ md: "1fr 1fr" }} gap={6} alignItems="center">
      <Box>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#333" }}>Un espacio seguro para ti</Typography>
        <Typography color="text.secondary" mb={2}>
          Nuestra comunidad es un foro moderado y empático donde puedes compartir tus experiencias, resolver dudas y sentirte acompañada en cada paso de tu viaje.
        </Typography>
        <Button variant="outlined" sx ={{borderColor:"#9946ec",color: "#9946ec"}} 
        onClick={()=>{
                navigate('/registro')
              }}
        >Únete a la conversación</Button>
      </Box>
      <Box component="img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXo68tl8t3rqGY3AsSJYRVpXOj66f74O0cONl2we7Qw_WrIo0JiSd9EKEb3_WXf45idAgBFvVZkSCC12JXnW7mdMOTs_EzH6tI38ePsd8YdPDD2YjWxXMRJ61TED5orTc4YBbhjsGO41v_B2LvK6jK5mmkkQYPXlft-Sh9kgC7Hf-qN2CCrayKnAUi0FGoiXHRw38KrJQ_HH0mOTt_KQPBjiLe7v28zjozFfwdEGX-fznM9BgMtU3R4wtJ0Dbr1Dlv_fl6wn-lMh2d" borderRadius={2} width="100%" />
    </Box>
  );
}
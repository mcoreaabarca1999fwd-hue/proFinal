import { Avatar, Box, Typography, Stack, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Comment({usuario,contenido}) {
  return (
    <Box display="flex" gap={2} mb={3}>
      <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt2BX00..." />

      <Box flex={1}>
        <Box
          sx={{
            bgcolor: "#f1f3f6",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography fontWeight={700} variant="body2">
            {usuario}{" "}
            <Typography component="span" color="text.secondary">
              hace 2 minutos
            </Typography>
          </Typography>

          <Typography mt={1}>{contenido}</Typography>
        </Box>

        <Stack direction="row" spacing={2} mt={1} ml={1}>
         
        </Stack>
      </Box>
    </Box>
  );
}
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function RightWidgets() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Buscador */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          p: 3,
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon sx={{ mr: 2, color: "#777" }} />
          <TextField
            variant="standard"
            placeholder="Buscar en el foro..."
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Box>
      </Box>

      {/* Perfil */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          p: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0KXkuOrs1vVJLVyTacHJidIPW_lbYEkGhWzBqgzr34-kQ1ZYBNobWFYp9-tIRnU5wJ5Ni_kxI5chTRd0KufaMDn2CsKWgRCO0s8LpfkjfHfjy2bYntRf69Qf3Pgffib6QPvyZkfyqqkz9RREMeuNBa7JWmQcHFJEuylaHYf_JVXGhRxoO8QjuD09PrbTCdNoOSq1nPme-tpzQPDuBxgzzZc7zFV5nB96eavlknLN2dDpy4B2k6pyh2bR6fMr3cMBaEwQ_DFzLFWn_"
        />

        <Typography fontWeight={700} fontSize={18}>
          SofiaV
        </Typography>
        <Typography fontSize={14} color="#88636f">
          @sofia_vqz
        </Typography>

        <Button
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#f3f3f3",
            "&:hover": { bgcolor: "#e5e5e5" },
            borderRadius: 2,
          }}
        >
          Ver mi Perfil
        </Button>
      </Box>

      {/* Temas populares */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          p: 3,
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <Typography fontSize={16} fontWeight={700} mb={2} px={1}>
          Temas Populares
        </Typography>

        {["#Endometriosis", "#SOP", "#FertilidadNatural", "#CopaMenstrual"].map(
          (t) => (
            <Box
              key={t}
              sx={{
                bgcolor: "#FADADD",
                px: 2,
                py: 1,
                borderRadius: 2,
                mb: 1,
                fontSize: 14,
              }}
            >
              {t}
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
import { Box, Typography } from "@mui/material";

export default function Predictions() {
  return (
    <Box sx={{
      bgcolor: "white",
      p: 4,
      borderRadius: 3,
      border: "1px solid #e5e5e5"
    }}>
      
      <Typography variant="h6" fontWeight="bold" mb={3}>Predicciones</Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        
        <PredictionCard label="Próximo período" value="28 de junio" />
        
        <PredictionCard
          label="Ventana fértil"
          value="12 - 17 de junio"
          borderColor="var(--primary-dark)"
        />

        <PredictionCard label="Próxima ovulación" value="16 de junio" />

      </Box>

    </Box>
  );
}

function PredictionCard({ label, value, borderColor }) {
  return (
    <Box sx={{
      border: borderColor ? `2px solid ${borderColor}` : "1px solid #e5e5e5",
      p: 2,
      borderRadius: 2
    }}>
      <Typography color="var(--medium-gray)">{label}</Typography>
      <Typography variant="h5" fontWeight="bold">{value}</Typography>
    </Box>
  );
}

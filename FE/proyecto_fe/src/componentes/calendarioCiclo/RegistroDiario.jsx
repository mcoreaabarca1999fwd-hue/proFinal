import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Grid,
  Switch,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BoltIcon from "@mui/icons-material/Bolt";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PsychIcon from "@mui/icons-material/Psychology";
import Face6Icon from "@mui/icons-material/Face6";
import IcecreamIcon from "@mui/icons-material/Icecream";
import SickIcon from "@mui/icons-material/Sick";
import BackPainIcon from "@mui/icons-material/Accessible";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import LocalFireDeptIcon from "@mui/icons-material/LocalFireDepartment";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MoodBadIcon from "@mui/icons-material/MoodBad";

export default function RegistroDiario() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#e9e6ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 700,
          borderRadius: 3,
          bgcolor: "white",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontSize={24} fontWeight={700}>
            Registro del 24 de Mayo
          </Typography>

          <IconButton
            sx={{
              bgcolor: "#f2f0f4",
              width: 40,
              height: 40,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* ESTADO FÍSICO */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Estado Físico y Emocional</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* Síntomas */}
              <Typography fontSize={14} fontWeight={600} sx={{ mb: 1 }}>
                Síntomas
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Chip
                  icon={<WaterDropIcon />}
                  label="Hinchazón"
                  sx={{
                    bgcolor: "rgba(153,71,235,0.2)",
                    border: "2px solid #9947eb",
                    color: "#9947eb",
                  }}
                />
                <Chip icon={<BoltIcon />} label="Calambres" />
                <Chip icon={<Battery2BarIcon />} label="Fatiga" />
                <Chip icon={<PsychIcon />} label="Dolor de cabeza" />
                <Chip icon={<Face6Icon />} label="Acné" />
                <Chip icon={<IcecreamIcon />} label="Antojo" />
                <Chip icon={<SickIcon />} label="Náuseas" />
                <Chip icon={<BackPainIcon />} label="Dolor de espalda" />
              </Box>

              {/* Humor */}
              <Typography fontSize={14} fontWeight={600} sx={{ mt: 2 }}>
                Humor
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Chip
                  icon={<SentimentSatisfiedIcon />}
                  label="Feliz"
                  sx={{
                    bgcolor: "rgba(153,71,235,0.2)",
                    border: "2px solid #9947eb",
                    color: "#9947eb",
                  }}
                />
                <Chip icon={<SentimentDissatisfiedIcon />} label="Triste" />
                <Chip
                  icon={<SentimentVeryDissatisfiedIcon />}
                  label="Ansiosa"
                />
                <Chip icon={<LocalFireDeptIcon />} label="Energética" />
                <Chip icon={<MoodBadIcon />} label="Irritable" />
                <Chip icon={<SelfImprovementIcon />} label="Calmada" />
                <Chip icon={<RocketLaunchIcon />} label="Motivada" />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* CICLO MENSTRUAL */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Ciclo Menstrual</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography fontSize={14} fontWeight={600}>
                Flujo Menstrual
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} sm={3}>
                  <Paper
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    <WaterDropIcon sx={{ fontSize: 30, opacity: 0.4 }} />
                    <Typography fontSize={13}>Sin flujo</Typography>
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Paper
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: "center",
                      bgcolor: "rgba(153,71,235,0.2)",
                      border: "2px solid #9947eb",
                      color: "#9947eb",
                    }}
                  >
                    <WaterDropIcon sx={{ fontSize: 30, color: "#9947eb" }} />
                    <Typography fontSize={13}>Ligero</Typography>
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Paper sx={{ p: 2, borderRadius: 2, textAlign: "center" }}>
                    <WaterDropIcon sx={{ fontSize: 30, opacity: 0.4 }} />
                    <Typography fontSize={13}>Moderado</Typography>
                  </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Paper sx={{ p: 2, borderRadius: 2, textAlign: "center" }}>
                    <WaterDropIcon sx={{ fontSize: 30, opacity: 0.4 }} />
                    <Typography fontSize={13}>Abundante</Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Typography fontSize={14} fontWeight={600} sx={{ mt: 3 }}>
                Flujo Vaginal
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 1 }}>
                <Chip label="Seco" />
                <Chip label="Pegajoso" />
                <Chip
                  label="Cremoso"
                  sx={{
                    bgcolor: "rgba(153,71,235,0.2)",
                    border: "2px solid #9947eb",
                    color: "#9947eb",
                  }}
                />
                <Chip label="Elástico" />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* MEDICACIÓN */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                Medicación y Anticonceptivos
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "#f2f0f4",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Medicación tomada</Typography>
                <Switch defaultChecked color="secondary" />
              </Box>

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "#f2f0f4",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Anticonceptivo tomado</Typography>
                <Switch color="secondary" />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* NOTAS */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Notas Adicionales</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Añade cualquier detalle adicional aquí..."
              />
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            p: 3,
            borderTop: "1px solid #ddd",
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button variant="outlined" sx={{ bgcolor: "#f2f0f4" }}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            sx={{ bgcolor: "#9947eb", "&:hover": { bgcolor: "#7c3ac3" } }}
          >
            Guardar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
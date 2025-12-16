import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Switch,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import IcecreamIcon from "@mui/icons-material/Icecream";
import Face6Icon from "@mui/icons-material/Face6";
import SickIcon from "@mui/icons-material/Sick";
import PersonalInjuryIcon from "@mui/icons-material/PersonalInjury";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MoodBadIcon from "@mui/icons-material/MoodBad";

export default function ModalRegistroDiario({
  open,
  onClose,
  onSave = () => {},
  dateLabel = "Registro del 24 de Mayo",
  initialData,
}) {
  // Estados
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedMood, setSelectedMood] = useState([]);
  const [flow, setFlow] = useState("");
  const [vaginalFlow, setVaginalFlow] = useState("");
  const [medication, setMedication] = useState(false);
  const [contraceptive, setContraceptive] = useState(false);
  const [notes, setNotes] = useState("");

  // Cargar datos iniciales cuando se abra el modal
  useEffect(() => {
    if (open) {
      if (initialData) {
        setSelectedSymptoms(initialData.symptoms || []);
        setSelectedMood(initialData.mood || []);
        setFlow(initialData.flow || "");
        setVaginalFlow(initialData.vaginalFlow || "");
        setMedication(Boolean(initialData.medication));
        setContraceptive(Boolean(initialData.contraceptive));
        setNotes(initialData.notes || "");
      }
    }
  }, [open, initialData]);

  // Funciones de toggle
  const toggleSelection = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetForm = () => {
    setSelectedSymptoms([]);
    setSelectedMood([]);
    setFlow("");
    setVaginalFlow("");
    setMedication(false);
    setContraceptive(false);
    setNotes("");
  };

  const handleSave = () => {
    const data = {
      symptoms: selectedSymptoms,
      mood: selectedMood,
      flow,
      vaginalFlow,
      medication,
      contraceptive,
      notes,
    };
    onSave(data);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 0, bgcolor: "#f7f6f8" }}>
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          bgcolor="white"
          borderBottom="1px solid #e0dce5"
        >
          <Typography fontSize={22} fontWeight={700}>
            {dateLabel}
          </Typography>

          <IconButton
            aria-label="Cerrar"
            onClick={handleClose}
            sx={{
              bgcolor: "#f2f0f4",
              width: 40,
              height: 40,
              transition: "all 0.25s ease",
              "&:hover": { bgcolor: "#e9e6ee" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* CONTENT */}
        <Box p={3} display="flex" flexDirection="column" gap={3}>
          {/* --------- SECCIÓN 1 --------- */}
          <Accordion defaultExpanded sx={{ borderRadius: 3, overflow: "hidden" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Estado Físico y Emocional</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* SÍNTOMAS */}
              <Typography fontSize={14} fontWeight={600} mb={1}>
                Síntomas
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={1.5}>
                {[
                  { label: "Hinchazón", icon: <WaterDropIcon /> },
                  { label: "Calambres", icon: <ElectricBoltIcon /> },
                  { label: "Fatiga", icon: <Battery0BarIcon /> },
                  { label: "Dolor de cabeza", icon: <HealthAndSafetyIcon /> },
                  { label: "Antojo", icon: <IcecreamIcon /> },
                  { label: "Acné", icon: <Face6Icon /> },
                  { label: "Náuseas", icon: <SickIcon /> },
                  { label: "Dolor de espalda", icon: <PersonalInjuryIcon /> },
                ].map((item) => (
                  <Chip
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    color={selectedSymptoms.includes(item.label) ? "primary" : "default"}
                    onClick={() =>
                      toggleSelection(selectedSymptoms, setSelectedSymptoms, item.label)
                    }
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>

              {/* HUMOR */}
              <Typography fontSize={14} fontWeight={600} mt={3} mb={1}>
                Humor
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={1.5}>
                {[
                  { label: "Feliz", icon: <SentimentSatisfiedAltIcon /> },
                  { label: "Triste", icon: <SentimentDissatisfiedIcon /> },
                  { label: "Ansiosa", icon: <SentimentVeryDissatisfiedIcon /> },
                  { label: "Energética", icon: <LocalFireDepartmentIcon /> },
                  { label: "Irritable", icon: <MoodBadIcon /> },
                  { label: "Calmada", icon: <SelfImprovementIcon /> },
                  { label: "Motivada", icon: <RocketLaunchIcon /> },
                ].map((item) => (
                  <Chip
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    color={selectedMood.includes(item.label) ? "primary" : "default"}
                    onClick={() => toggleSelection(selectedMood, setSelectedMood, item.label)}
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* --------- SECCIÓN 2 --------- */}
          <Accordion defaultExpanded sx={{ borderRadius: 3, overflow: "hidden" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Ciclo Menstrual</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* Flujo menstrual */}
              <Typography fontSize={14} fontWeight={600} mb={1}>
                Flujo Menstrual
              </Typography>

              <Grid container spacing={2}>
                {["Sin flujo", "Ligero", "Moderado", "Abundante"].map((label, i) => (
                  <Grid item xs={6} sm={3} key={i}>
                    <Box
                      p={2}
                      bgcolor={flow === label ? "#e9ddfb" : "#f2f0f4"}
                      borderRadius={3}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      sx={{
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        "&:hover": { bgcolor: flow === label ? "#e2d5f7" : "#e8e5ec" },
                      }}
                      onClick={() => setFlow(label)}
                      aria-label={`Flujo menstrual: ${label}`}
                    >
                      <WaterDropIcon />
                      <Typography fontSize={13} mt={1}>
                        {label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Flujo vaginal */}
              <Typography fontSize={14} fontWeight={600} mt={3} mb={1}>
                Flujo Vaginal
              </Typography>

              <Box display="flex" gap={1.5} flexWrap="wrap">
                {["Sin flujo", "Blanco", "Clara de huevo", "Cremoso", "Rosa", "Marrón", "Amarillo"].map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    color={vaginalFlow === label ? "primary" : "default"}
                    onClick={() => setVaginalFlow(label)}
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* --------- SECCIÓN 3 --------- */}
          <Accordion sx={{ borderRadius: 3, overflow: "hidden" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Medicación y Anticonceptivos</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                bgcolor="#f2f0f4"
                borderRadius={2}
                mb={2}
              >
                <Typography fontSize={14}>Medicación tomada</Typography>
                <Switch
                  checked={medication}
                  onChange={(e) => setMedication(e.target.checked)}
                  color="primary"
                  inputProps={{ "aria-label": "Medicación tomada" }}
                />
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                bgcolor="#f2f0f4"
                borderRadius={2}
              >
                <Typography fontSize={14}>Anticonceptivo tomado</Typography>
                <Switch
                  checked={contraceptive}
                  onChange={(e) => setContraceptive(e.target.checked)}
                  inputProps={{ "aria-label": "Anticonceptivo tomado" }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* --------- SECCIÓN 4 --------- */}
          <Accordion sx={{ borderRadius: 3, overflow: "hidden" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>Notas Adicionales</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <TextField
                multiline
                rows={3}
                fullWidth
                placeholder="Añade cualquier detalle adicional aquí..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* FOOTER */}
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          p={3}
          borderTop="1px solid #e0dce5"
          bgcolor="white"
        >
          <Box display="flex" gap={1}>
            <Button variant="text" color="inherit" onClick={resetForm}>
              Limpiar
            </Button>
          </Box>
          <Box display="flex" gap={2}>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ bgcolor: "#9947eb", "&:hover": { bgcolor: "#8639d8" } }}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
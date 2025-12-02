import React from "react";
import { Box, Typography, Button, Chip, Avatar, Grid, Paper, IconButton } from "@mui/material";

export default function Main() {
  return (
    <Box component="main" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 960 }}>
        {/* breadcrumb / small header */}
        <Box sx={{ mb: 2 }}>
          <Button startIcon={<span className="material-symbols-outlined">arrow_back</span>} size="small">
            Volver a Recursos
          </Button>
        </Box>

        {/* Title block */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ color: "primary.main", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>
            Ciclo Menstrual
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 1.5 }}>
            Entendiendo las Fases de tu Ciclo Menstrual
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "text.secondary", fontSize: 14 }}>
            <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-DW7zCvoLVh2OOHSBCg6M2DGwmrsDtwnvgjs93yT5NGwIQsANBq6jQ_3PtqS9wXPWAJL8qpmjW6X9AydXpROL9RY3jznqWjUVgLcafGQmkOHzviI4yXranC61aXxkVX5wzOke6Pa0OWWI-ITNzBKfHXMPKN-k0JnLFxb-w2lK7-AoFgQvGUr53FwmlKdbjmnE6HVsw_Wt0EjaD9t-4vrI39oXitfrvL4V2Y6oYTsXhG2x6vqie9M6bF1dKJqR6sAFvwwEp7T7OYNU" sx={{ width: 36, height: 36 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Dra. Elena García</Typography>
            <Typography variant="body2">•</Typography>
            <Typography variant="body2">Publicado el 15 de Mayo, 2024</Typography>
          </Box>
        </Box>

        {/* Hero image */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 220, sm: 320, md: 420 },
            borderRadius: 2,
            overflow: "hidden",
            mb: 4,
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy1p-x46nfG49E1FoOTIaIbup_8K-XiXhSm0ks0hQdJvhuhuYcClPKFoOjWILCOviU9HYtAzMqRQcdCW2UiYVyregM81fxl94wVzjGc-RDJWMLKZGd7qh-NZGBGaZMXuXlkWGew_OAjWH5S0UiizWZW_nSFuLgmRoWmkt8kaiaYPQUOdaqMfpjYx7ZSDvL7jJ_EVgrYgkJKopbNvTA7c7JOo-3gLmvuo4ufsWTL5jzW2SXOBfSGsLSGH8i_7nNCwxX4AmPNHBZ2vID")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          role="img"
          aria-label="Hero"
        />

        {/* Article content */}
        <Box sx={{ typography: "body1", color: "text.primary", mb: 4 }}>
          <Typography paragraph>
            El ciclo menstrual es mucho más que solo tu período. Es un proceso complejo y fascinante que influye en tu energía, estado de ánimo, y bienestar general. Comprender sus fases te empodera para trabajar con tu cuerpo, no contra él. En esta guía completa, exploraremos cada una de las cuatro fases del ciclo menstrual.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>Fase 1: Menstruación</Typography>
          <Typography paragraph>
            El primer día de tu período marca el inicio de tu ciclo. Durante esta fase, el revestimiento del útero (endometrio) se desprende...
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li><strong>Duración:</strong> 3 a 7 días.</li>
            <li><strong>Qué hacer:</strong> Prioriza el descanso, nútrete con alimentos ricos en hierro y mantente hidratada.</li>
          </Box>

          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>Fase 2: Folicular</Typography>
          <Typography paragraph>
            Esta fase comienza el primer día de tu período y termina con la ovulación...
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, my: 2, bgcolor: "background.paper" }}>
            <Typography sx={{ fontStyle: "italic" }}>
              "La fase folicular es un renacimiento. A medida que el estrógeno aumenta, también lo hacen tu energía y tu creatividad..."
            </Typography>
          </Paper>

          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>Fase 3: Ovulación</Typography>
          <Typography paragraph>Es el evento principal del ciclo. Un aumento en la hormona luteinizante (LH) provoca que el ovario libere el óvulo maduro...</Typography>

          <Box
            sx={{
              width: "100%",
              height: { xs: 180, sm: 220, md: 320 },
              borderRadius: 2,
              overflow: "hidden",
              my: 3,
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkq029vKuaAEIfy1gW0gFkoZnHn1YFBxAio_UQuUCjrh1CksVpZApbi6JUiQ8xONMLTxlkwPzP2XgqBLBsXBq8it1RuvNREzEz0x6VhHHI-O67V6QRTn3YN1k1K_XYGObGn1d9VjSAaouG0LBUI1rmOYEbqWS9SNlYbgFSQiBd28i7AJQpo_2Wc5nJUwQP301pxwSNg2ODMeUwVqoXzPXied5-aPo1Gxi9bY6rn9OVHiS9LxwuIMONRYXTH1QqhFSGgL4BtEMcwg-T")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Ovulation illustration"
          />

          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>Fase 4: Lútea</Typography>
          <Typography paragraph>
            Después de la ovulación, el folículo que liberó el óvulo se transforma en el cuerpo lúteo, que produce progesterona...
          </Typography>

          <Typography paragraph>Comprender estas fases es el primer paso para una mayor conciencia corporal...</Typography>
        </Box>

        {/* Share & actions */}
        <Box sx={{ borderTop: "1px solid #eee", pt: 3, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Typography sx={{ fontWeight: 700 }}>Compartir este artículo:</Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton aria-label="share twitter" size="large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.008 6.204c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.125 4.82 17.23 4.4 16.225 4.4c-2.266 0-4.1 1.834-4.1 4.1 0 .322.036.635.106.935-3.407-.172-6.428-1.803-8.45-4.285-.353.606-.556 1.312-.556 2.064 0 1.423.724 2.678 1.825 3.415-.673-.02-1.305-.207-1.858-.512v.052c0 1.988 1.414 3.646 3.29 4.022-.344.094-.707.144-1.08.144-.264 0-.52-.026-.772-.074.522 1.63 2.038 2.816 3.833 2.85-1.404 1.1-3.174 1.756-5.096 1.756-.33 0-.656-.02-.978-.057 1.815 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0024 4.39a8.21 8.21 0 01-2.357.646z"/></svg>
            </IconButton>
            <IconButton aria-label="share facebook" size="large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z"/></svg>
            </IconButton>
            <IconButton aria-label="share other" size="large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M14.5 12.5H12v2h2.5c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5H12V8h2.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H12v-2h2.5c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5zM9.5 10H7V8h2.5c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5H7v2h2.5c2.481 0 4.5-2.019 4.5-4.5S11.981 5.5 9.5 5.5H7v2h2.5c1.379 0 2.5 1.121 2.5 2.5S10.879 10 9.5 10z"/></svg>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
import { Box, Grid } from "@mui/material";
import Header from "../../componentes/foroComp/Header";
import LeftSidebar from "../../componentes/foroComp/LeftSidebar";
import RightWidgets from "../../componentes/foroComp/RightWidgets";
import PostCard from "../../componentes/foroComp/PostCard";

export default function ForoPage() {
  return (
    <Box sx={{ bgcolor: "#f8f6f6", minHeight: "100vh" }}>
      <Header />

      <Box sx={{ maxWidth: 1280, mx: "auto", px: 3, py: 4 }}>
        <Grid container spacing={4}>
          {/* Left */}
          <Grid item xs={12} lg={3}>
            <LeftSidebar />
          </Grid>

          {/* Feed */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <PostCard
                user="Ana G."
                time="hace 5 minutos"
                title="¿Alguien más siente más antojos durante la fase lútea?"
                text="Últimamente he notado que me apetece mucho el dulce justo antes de que me venga la regla..."
                tags={["#SaludMenstrual", "#Consejos"]}
                likes={125}
                comments={42}
                liked
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_AIGKo5WF-8AKj-Wpf_Q7NG1x1ZCtKaaoo2_kZGZG_DW7woXpV_yCP-Q2EMrhqRgogYUQ9uDqhYK28Dh1JOVFT1sMXWSdNRlMeFj1HGGXGetFbQjZTAnmJq8Oz-BcZBVjFYfUibWdpfoeYdk6TlYoflr3iEE25Q_0xjpp4q2Bt42fUoccpxUsrDPMKj1DmcnHGXMaiY2x_8UnWgzXnPheTA3ZipymhECvSHTlBtWA2_m0iNHZFT22tUKjR0ClEtCzyFlUaWtQX_0"
              />

              <PostCard
                user="Laura M."
                time="hace 2 horas"
                title="Mi experiencia con el yoga para el dolor menstrual"
                text="¡Hola a todas! Solo quería compartir algo que me ha cambiado la vida..."
                tags={["#Bienestar"]}
                likes={89}
                comments={15}
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDt2BX00VqI2s6kks6B6jDKcWpxtNTZFK3SQ4Dexsa6Yet73R42DYPCypcSIEy9MpO-L56eHXi2RLApBVK-jCeYxNWcImb3fGneGWMelqkPrN5wbqfSopSIDCddHeXo7YdWjkKpfioE-8oRWtKp7Om27gKtEKwkbefiQoFieTSiKv66nv6qOy8n9h4YhNQEqYACu57ZUIn-5J9MsxfayguzU46REck2TpMbebGGqGYj93va51D7joxQLvcEuun6OMY59XyNllpq8X8e"
              />
            </Box>
          </Grid>

          {/* Right */}
          <Grid item lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
            <RightWidgets />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
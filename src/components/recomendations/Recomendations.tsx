import { Typography } from "@mui/material";
import CardsCarrousel from "./CardsCarousel";

export default function Recomendations() {
  return (
    <>
      <Typography my={5} align="center" fontSize={25} fontWeight={700}>
        Recomendaciones
      </Typography>
      <CardsCarrousel />
    </>
  );
}

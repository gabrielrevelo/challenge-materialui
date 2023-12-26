import { Grid, Typography } from "@mui/material";
import PlateCard from "./PlateCard";
import plates from "./PlatesData";

export default function Plates() {
  return (
    <>
      <Typography my={5} align="center" fontSize={25} fontWeight={700}>
        Platos
      </Typography>
      <Grid container spacing={5}>
        {plates.map((plate: any, index: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display={"flex"}
            justifyContent={"center"}
          >
            <PlateCard
              companyName={plate.companyName}
              plateName={plate.plateName}
              platePrice={plate.platePrice}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

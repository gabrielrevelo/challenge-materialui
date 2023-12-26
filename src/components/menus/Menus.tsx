import { Typography, Container, Grid } from "@mui/material";
import CardMenu from "./CardMenu";
import menus from "./MenusData";

export default function Menus() {
  return (
    <>
      <Typography my={5} align="center" fontSize={25} fontWeight={700}>
        Menus
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={5} justifyContent={"center"}>
          {menus.map((menu: any, index: any) => (
            <Grid
              item
              md={6}
              key={index}
              display={"flex"}
              justifyContent={"center"}
            >
              <CardMenu
                companyName={"Empresa"}
                menuName={"Menu"}
                plates={"Platos"}
                price={"00"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

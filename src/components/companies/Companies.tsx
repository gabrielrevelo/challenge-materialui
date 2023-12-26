import { Typography, Grid } from "@mui/material";
import CompanyCard from "./CompanyItem";

const companies: Array<any> = [];

for (let i = 1; i <= 6; i++) {
  const company = {
    name: `Empresa ${i}`,
    description: `Descripcion ${i}`,
  };
  companies.push(company);
}

export default function Companies() {
  return (
    <>
      <Typography my={5} align="center" fontSize={25} fontWeight={700}>
        Empresas asociadas
      </Typography>
      <Grid container spacing={4.5} justifyContent={"center"}>
        {companies.map(({ name, description} : any) => (
          <Grid item lg={2} display={"flex"} justifyContent={"center"} key={name}>
            <CompanyCard name={name} description={description} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

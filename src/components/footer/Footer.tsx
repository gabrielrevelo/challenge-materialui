import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      py={4}
      bgcolor={"#F86260"}
      color={"white"}
      sx={{
        px: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box width={"176px"}>
          <Typography>Politica de publicidad</Typography>
          <Typography>Terminos y condiciones</Typography>
          <Typography>Seguridad</Typography>
        </Box>
        <Box
          textAlign={"center"}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography fontSize={25} fontWeight={700}>
            LOGO
          </Typography>
          <Typography mb={4}>correo@correo.com</Typography>
          <Typography>2023 LOGO All right reserved</Typography>
        </Box>
        <Box width={"176px"} textAlign={"end"}>
          <Typography>Home</Typography>
          <Typography>Empresas</Typography>
          <Typography>Carritos</Typography>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        mt={4}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <Typography fontSize={25} fontWeight={700}>
          LOGO
        </Typography>
        <Typography mb={4}>correo@correo.com</Typography>
        <Typography>2023 LOGO All right reserved</Typography>
      </Box>
    </Box>
  );
}

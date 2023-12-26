import { Box, Typography } from "@mui/material";

export default function CompanyCard({ name, description }: any) {
  return (
    <Box
      width={140}
      padding={1}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      alignItems={"center"}
    >
      <Box
        width={88}
        height={88}
        bgcolor={"white"}
        borderRadius={36}
        sx={{
          background: "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
        }}
      ></Box>
      <Typography align="center" fontSize={16} fontWeight={700}>
        {name}
      </Typography>
      <Typography align="center" fontSize={10}>
        {description}
      </Typography>
    </Box>
  );
}

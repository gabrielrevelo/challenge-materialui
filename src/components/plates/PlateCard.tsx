import { Box, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function PlateCard({ companyName, plateName, platePrice }: any) {
  return (
    <Box
      width={240}
      height={274}
      display={"flex"}
      padding={3}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      borderRadius={"20px"}
      bgcolor={"#FFFCF8"}
      boxShadow={"5px 4px 10px 0px rgba(136, 6, 77, 0.25)"}
    >
      <Box
        sx={{
          width: "100%",
          height: "136px",
          background: "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
          borderRadius: "20px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            color: "#484848",
            fontSize: "12px",
          }}
        >
          {companyName}
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {plateName}
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#F86260",
          }}
        >
          <Typography fontSize={"16px"} fontWeight={700} component="h1">
            ${platePrice}
          </Typography>
          <Button
            variant="contained"
            sx={{
              minWidth: "0px",
              padding: 0.25,
              boxShadow: "none",
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

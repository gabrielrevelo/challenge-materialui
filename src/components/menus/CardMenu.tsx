import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ModalMenu from "./ModalMenu";

export default function CardMenu({
  companyName,
  menuName,
  plates,
  price,
}: any) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    console.log(isOpenModal);
  };

  return (
    <>
      <div onClick={openModal}>
        <Box
          width={286}
          height={326}
          display={"flex"}
          padding={3}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          borderRadius={5}
          bgcolor={"#FFFCF8"}
          boxShadow={"5px 4px 10px 0px rgba(136, 6, 77, 0.25)"}
          sx={{
            ":hover": {
              boxShadow: "5px 8px 10px 0px rgba(136, 6, 77, 0.3)",
              cursor: "pointer",
              transform: "scale(1.025)",
              transition: "0.25s ease",
            },
          }}
        >
          <Box
            borderRadius={5}
            width={"100%"}
            height={"120px"}
            sx={{
              background: "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
            }}
          ></Box>
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={0.5}
          >
            <Typography fontSize={12}>{companyName}</Typography>
            <Typography fontSize={14} fontWeight={700}>
              {menuName}
            </Typography>
            <Typography width={"100%"} fontSize={10}>
              - Lorem impsun
              <br />
              - Lorem impsun
              <br />
              - Lorem impsun
              <br />
              - Lorem impsun
              <br />
              - Lorem impsun
              <br />
            </Typography>
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
                $00
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
      </div>
      <ModalMenu isOpenModal={isOpenModal} closeModal={closeModal} />
    </>
  );
}

import {
  Box,
  Button,
  Modal,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  boxShadow: "5px 4px 10px 0px rgba(136, 6, 77, 0.25)",
  backgroundColor: "#FFFCF8",
  borderRadius: 10,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

export default function ModalMenu({ isOpenModal, closeModal }: any) {
  return (
    <Modal
      open={isOpenModal}
      onClose={closeModal}
      slotProps={{
        backdrop: {
          sx: {
            background: "none",
            backdropFilter: "blur(8px)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 368,
          bgcolor: "#FFFCF8;",
          border: "none",
          px: 4,
          py: 3,
          borderRadius: "20px",
          boxShadow: "5px 4px 10px 0px rgba(136, 6, 77, 0.25)",
          outline: "none",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box display={"flex"} gap={2}>
          <Box
            width={142}
            height={142}
            borderRadius={5}
            sx={{
              background: "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
            }}
          ></Box>
          <Box>
            <Typography fontSize={16} fontWeight={700}>
              Nombre del menu
            </Typography>
            <Typography fontSize={12} mt={1}>
              Descripción
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={16} fontWeight={700} mb={1}>
            Platos
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <Box color={"#F86260"}>
                    <ExpandMoreIcon />
                  </Box>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box display={"flex"} gap={2}>
                  <Box
                    width={40}
                    height={40}
                    borderRadius={"10px"}
                    sx={{
                      background:
                        "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
                    }}
                  ></Box>
                  <Box>
                    <Typography fontSize={14} fontWeight={700}>
                      Nombre del plato
                    </Typography>
                    <Typography fontSize={10}>Descripcion</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={10}>
                  Ingredientes
                  <br />
                  Ingredientes
                  <br />
                  Ingredientes
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <Box color={"#F86260"}>
                    <ExpandMoreIcon />
                  </Box>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box display={"flex"} gap={2}>
                  <Box
                    width={40}
                    height={40}
                    borderRadius={"10px"}
                    sx={{
                      background:
                        "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
                    }}
                  ></Box>
                  <Box>
                    <Typography fontSize={14} fontWeight={700}>
                      Nombre del plato
                    </Typography>
                    <Typography fontSize={10}>Descripcion</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={10}>
                  Ingredientes
                  <br />
                  Ingredientes
                  <br />
                  Ingredientes
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <Box color={"#F86260"}>
                    <ExpandMoreIcon />
                  </Box>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box display={"flex"} gap={2}>
                  <Box
                    width={40}
                    height={40}
                    borderRadius={"10px"}
                    sx={{
                      background:
                        "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
                    }}
                  ></Box>
                  <Box>
                    <Typography fontSize={14} fontWeight={700}>
                      Nombre del plato
                    </Typography>
                    <Typography fontSize={10}>Descripcion</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={10}>
                  Ingredientes
                  <br />
                  Ingredientes
                  <br />
                  Ingredientes
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
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
        <Link
          to={"/menu-preferences"}
          style={{
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: 1,
              boxShadow: "none",
              borderRadius: "5px",
              textTransform: "capitalize",
              fontWeight: 700,
              width: "100%",
            }}
          >
            Preferencias
          </Button>
        </Link>
      </Box>
    </Modal>
  );
}

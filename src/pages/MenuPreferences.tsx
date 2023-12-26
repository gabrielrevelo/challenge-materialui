import {
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
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

export default function MenuPreferences() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Box display={"flex"} color={"#F86260"} gap={1}>
          <NavigateBeforeIcon fontSize="large" />
          <Typography fontSize={24} fontWeight={700} mt={0.8}>
            Preferencias
          </Typography>
        </Box>
      </Link>
      <Box
        sx={{
          px: {
            xs: 0,
            sm: 8,
          },
        }}
        pt={4}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Nombre del menu
          </Typography>
          <Typography mt={2}>Descripción</Typography>
        </Box>
        <PlateAcordion />
        <PlateAcordion />
        <PlateAcordion />
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Alergias
          </Typography>
          <Typography mt={2} fontSize={12} color={"#9295AA"}>
            Especifique si sufre de algún tipo de alergia
          </Typography>
          <Box
            sx={{
              width: "100%",
              h: 8,
              borderRadius: "10px",
              backgroundColor: "#F86260",
              color: "white",
              p: 1,
              mb: 4,
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "none",
                outline: "none",
                color: "white",
                fontFamily: "Hind",
              }}
            />
          </Box>
          <Typography fontSize={20} fontWeight={500}>
            Ingrediente
          </Typography>
          <Typography fontSize={20} fontWeight={500}>
            Ingrediente
          </Typography>
          <Typography fontSize={20} fontWeight={500}>
            Ingrediente
          </Typography>
          <Typography fontSize={20} fontWeight={500}>
            Ingrediente
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          alignItems={"flex-end"}
        >
          <Typography
            fontSize={"16px"}
            fontWeight={700}
            component="h1"
            color={"#F86260"}
          >
            $00
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: 1,
              boxShadow: "none",
              borderRadius: "5px",
              width: "265px",
            }}
          >
            Añadir al carrito
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function PlateAcordion() {
  return (
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
          <Box>
            <Typography fontSize={20} fontWeight={700} mb={2}>
              Nombre del plato
            </Typography>
            <Typography fontSize={12}>Descripcion</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
            },
          }}
        >
          <Box>
            <Typography fontSize={16} fontWeight={700} mb={1}>
              Ingredientes
            </Typography>
            <IngredientCheckbox />
            <IngredientCheckbox />
            <IngredientCheckbox />
            <IngredientCheckbox />
            <IngredientCheckbox />
            <IngredientCheckbox />
            <IngredientCheckbox />
          </Box>
          <Box
            sx={{
              width: {
                xs: "240px",
                sm: "360px",
              },
              height: {
                xs: "240px",
                sm: "360px",
              },
              mb: {
                xs: 2,
                sm: 0,
              },
              background: "linear-gradient(180deg, #F86260 0%, #E9FF60 100%)",
            }}
            borderRadius={"10px"}
          ></Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

function IngredientCheckbox() {
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<RadioButtonCheckedIcon />}
        sx={{
          color: "#F86260",
        }}
      />
      <Typography fontSize={12}>Ingrediente</Typography>
    </Box>
  );
}

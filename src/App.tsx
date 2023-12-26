import { Box, Typography } from "@mui/material";
import SideBar from "./components/SideBar";
import Plates from "./components/plates/Plates";
import SearchBar from "./components/SearchBar";
import Menus from "./components/menus/Menus";
import Companies from "./components/companies/Companies";
import Recomendations from "./components/recomendations/Recomendations";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Box display={"flex"}>
        <SideBar />
        <Box padding={4}>
          <SearchBar />
          <Plates />
          <Menus />
          <Companies />
          <Recomendations />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

import { Box } from "@mui/material";
import SideBar from "./components/SideBar";
import Plates from "./components/plates/Plates";
import SearchBar from "./components/SearchBar";
import Menus from "./components/menus/Menus";

export default function App() {
  return (
    <>
      <Box display={"flex"}>
        <SideBar />
        <Box padding={4}>
          <SearchBar />
          <Plates />
          <Menus />
        </Box>
      </Box>
    </>
  );
}

import { Box } from "@mui/material";
import SideBar from "./components/SideBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPreferences from "./pages/MenuPreferences";

export default function App() {
  return (
    <>
      <Box display={"flex"}>
        <SideBar />
        <Box padding={4} width={"100%"}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu-preferences" element={<MenuPreferences />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

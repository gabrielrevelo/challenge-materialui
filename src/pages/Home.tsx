import SearchBar from "../components/SearchBar";
import Companies from "../components/companies/Companies";
import Menus from "../components/menus/Menus";
import Plates from "../components/plates/Plates";
import Recomendations from "../components/recomendations/Recomendations";

export default function Home() {
    return (
      <>
        <SearchBar />
        <Plates />
        <Menus />
        <Companies />
        <Recomendations />
      </>
    );
  }
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        width: "100%",
        h: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "10px",
        backgroundColor: "#F86260",
        color: "white",
        p: 1,
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
      <SearchIcon />
    </Box>
  );
}

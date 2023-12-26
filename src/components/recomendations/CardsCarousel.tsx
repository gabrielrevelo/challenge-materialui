import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import PlateCard from "../plates/PlateCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import plates from "../plates/PlatesData";

export default function CardsCarrousel() {
  const [nElements, setNElements] = useState(4);
  const [carouselGroups, setCarouselGroups] = useState<any[][]>([]);

  const handleResize = () => {
    if (window.innerWidth > 1400) {
      setNElements(4);
    } else if (window.innerWidth > 900) {
      setNElements(3);
    } else if (window.innerWidth > 600) {
      setNElements(2);
    } else {
      setNElements(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newCarouselGroups = [];
    for (let i = 0; i < Math.ceil(plates.length / nElements); i++) {
      const start = i * nElements;
      const end = (i + 1) * nElements;
      newCarouselGroups.push(plates.slice(start, end));
    }
    setCarouselGroups(newCarouselGroups);
  }, [plates, nElements]);

  return (
    <Carousel
      NextIcon={<NavigateNextIcon fontSize="large" />}
      PrevIcon={<NavigateBeforeIcon fontSize="large" />}
      navButtonsProps={{
        style: {
          backgroundColor: "#FFFCF8",
          color: "#F86260",
          margin: "-16px",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0px",
        },
      }}
      indicators={false}
      navButtonsAlwaysVisible
    >
      {carouselGroups.map((carouselGroup, i) => (
        <Box display={"flex"} justifyContent={"center"} gap={2} key={i}>
          {carouselGroup.map((plate: any, index: any) => (
            <PlateCard
              companyName={plate.companyName}
              plateName={plate.plateName}
              platePrice={plate.platePrice}
              key={plate.id}
            />
          ))}
        </Box>
      ))}
    </Carousel>
  );
}

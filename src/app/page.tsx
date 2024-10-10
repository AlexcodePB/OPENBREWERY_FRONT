"use client";
import CardCarousel from "@/components/CardCarrousel";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Box margin={2} bg="#010316" minHeight="calc(100vh - 90px)">
        <CardCarousel title={"Todas las opciones"} />
        <CardCarousel title={"Opciones en California"} state="California" />
      </Box>
    </>
  );
};
export default HomePage;

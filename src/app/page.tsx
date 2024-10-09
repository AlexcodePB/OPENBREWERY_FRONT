"use client";
import CardCarousel from "@/components/CardCarrousel";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box margin={2}>
        <CardCarousel title={"Todas las opciones"} />
        <CardCarousel title={"Opciones en California"} state="California" />
      </Box>
    </>
  );
};
export default HomePage;

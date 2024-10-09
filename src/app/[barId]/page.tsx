"use client";
import CardCarousel from "@/components/CardCarrousel";
import CardReview from "@/components/CardReview";
import { Box, HStack, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { getBarById } from "../../libs/api";

const BarPage = ({ params }: any) => {
  const { barId } = params;

  // Estados para el bar, error y carga
  const [bar, setBar] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBar = async () => {
      try {
        const response = await getBarById(String(barId));
        if (!response) {
          throw new Error("Error fetching bar data");
        }
        setBar(response[0]);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBar();
  }, [barId]);

  if (loading) {
    return <Spinner size="xl" color="white" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box p={4} bgColor="gray.800" color="white" minHeight="100vh">
      {/* Título */}
      <Heading as="h1" size="xl" mb={4}>
        {bar.name}
      </Heading>

      {/* Ubicación */}
      <HStack spacing={2} mb={4}>
        <IoLocationSharp size={20} />
        <Text>{bar.street}</Text>
      </HStack>

      {/* Contacto */}
      <HStack spacing={2} mb={4}>
        <IoCall size={20} />
        <Text>{bar.phone}</Text>
      </HStack>

      {/* Carrusel de fotos */}
      <CardCarousel imgGallery={true} />

      {/* Opiniones */}
      <VStack spacing={4} align="start" mt={6}>
        <Heading as="h2" size="lg">
          Opiniones
        </Heading>
        <CardReview userName="alexis" comment="no me gusto la ipaa!!" />
      </VStack>
    </Box>
  );
};

export default BarPage;

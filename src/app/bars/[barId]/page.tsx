"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import CardCarousel from "../../../components/CardCarrousel";
import CardReview from "../../../components/CardReview";
import { getBarById } from "../../../libs/api";

const reviews = [
  { userName: "alexis", comment: "¡La IPA no me gustó!" },
  {
    userName: "juan",
    comment: "Las cervezas artesanales son increíbles, especialmente la stout.",
  },
  {
    userName: "maria",
    comment: "Ambiente acogedor y buena atención. Recomendado.",
  },
  { userName: "lucas", comment: "¡Me encanta su variedad de cervezas!" },
  {
    userName: "sofia",
    comment: "La lager es refrescante, perfecto para el verano.",
  },
  {
    userName: "pedro",
    comment: "El lugar es bonito, pero la música estaba demasiado alta.",
  },
];

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
    return (
      <Box p={4} color="white" minHeight="100vh">
        {/* Skeletons durante la carga */}
        <Skeleton height="40px" mb={4} />
        <Skeleton height="20px" width="50%" mb={2} />
        <Skeleton height="20px" width="30%" mb={4} />
        <Skeleton height="200px" mb={6} />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="20px" />
      </Box>
    );
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box p={4} color="white" minHeight="100vh">
      <Heading as="h1" size="xl" mb={4}>
        {bar.name}
      </Heading>

      <HStack spacing={2} mb={4}>
        <IoLocationSharp size={20} />
        <Text>{bar.street}</Text>
      </HStack>

      <HStack spacing={2} mb={4}>
        <IoCall size={20} />
        <Text>{bar.phone}</Text>
      </HStack>

      <CardCarousel imgGallery={true} />

      <VStack spacing={2} align="start" mt={6} pb={"52px"}>
        <Heading as="h2" size="lg">
          Opiniones
        </Heading>
        {reviews.map((review, index) => (
          <CardReview
            key={index}
            userName={review.userName}
            comment={review.comment}
          />
        ))}

        <Button
          color="white"
          mt={4}
          width="100%"
          height={"52px"}
          bgGradient="linear(to-r, #3c3fe8, #de1fd6)"
        >
          Reservar mesa
        </Button>
        <Button
          color="white"
          mt={6}
          mb={8}
          width="100%"
          borderColor={"#de1fd6"}
          height={"52px"}
          variant={"outline"}
        >
          Opciones de transporte
        </Button>
      </VStack>
    </Box>
  );
};

export default BarPage;

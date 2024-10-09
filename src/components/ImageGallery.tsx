"use client";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const ImageGallery = () => {
  // Lista de imágenes locales
  const images = [
    "assets/images/bar2.jpg",
    "assets/images/bar3.jpg",
    "assets/images/bar4.jpg",
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {images.map((src, index) => (
          <Box key={index} borderRadius="md" overflow="hidden">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;

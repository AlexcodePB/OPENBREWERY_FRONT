import { PhoneIcon } from "@chakra-ui/icons";
import { IoLocationSharp } from "react-icons/io5";

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface CardProps {
  barName: string;
  address: string;
  contact: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ barName, address, contact, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="4"
      maxW="lg"
      h={"full"}
      boxShadow="md"
      border={"none"}
      color={"white"}
      bgColor={"#14132d"}
    >
      <Flex>
        <Text fontSize="xl" fontWeight="bold">
          {barName}
        </Text>
      </Flex>
      <Flex mt={2} alignItems={"center"}>
        <Image
          borderRadius="full"
          boxSize="80px"
          src={imageSrc}
          alt={barName}
          mr={4}
        />
        <VStack align="start">
          <Flex align="center">
            <Box mr={2}>
              <IoLocationSharp size="22px" color="white" />
            </Box>
            <Text>{address}</Text>
          </Flex>
          <Flex align="center">
            <PhoneIcon color="white" mr={2} ml={1} />
            <Text>{contact}</Text>
          </Flex>
        </VStack>
      </Flex>
      <Spacer />
      <Center>
        <Button
          color={"white"}
          mt={4}
          width="80%"
          bgGradient="linear(to-r, #3c3fe8, #de1fd6)"
        >
          <Text>Ver más</Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Card;

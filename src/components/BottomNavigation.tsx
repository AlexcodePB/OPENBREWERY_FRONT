import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { IoCalendar, IoChatbubbles, IoHome } from "react-icons/io5";

const BottomNavigation = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="#010316"
      boxShadow="md"
      p={2}
    >
      <HStack justifyContent="space-around">
        <VStack spacing={0} align="center">
          <IconButton
            aria-label="Calendario"
            icon={<IoCalendar />}
            variant="ghost"
            size="lg"
            fontSize={"1.8em"}
            padding={0}
            color={"white"}
          />
          <Text color="white" fontSize="sm">
            Calendario
          </Text>
        </VStack>

        <VStack spacing={0} align="center">
          <Link href="/">
            <IconButton
              aria-label="Inicio"
              icon={<IoHome />}
              variant="ghost"
              size="lg"
              fontSize={"1.8em"}
              padding={0}
              color={"white"}
            />
          </Link>
          <Text color="white" fontSize="sm">
            Inicio
          </Text>
        </VStack>

        <VStack spacing={0} align="center">
          <IconButton
            aria-label="Chat"
            icon={<IoChatbubbles />}
            variant="ghost"
            size="lg"
            fontSize={"1.8em"}
            padding={0}
            color={"white"}
          />

          <Text color="white" fontSize="sm">
            Chat
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;

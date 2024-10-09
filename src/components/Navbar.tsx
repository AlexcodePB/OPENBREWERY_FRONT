import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  GenericAvatarIcon,
  IconButton,
  Menu,
  MenuButton,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  const toast = useToast(); // Inicializa el hook de toast

  const handleBellClick = () => {
    toast({
      title: "Notificación",
      description: "Tienes nuevas notificaciones.",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top",

      variant: "subtle", // Cambia el estilo del toast si lo deseas
    });
  };

  return (
    <Box
      top={0}
      width="100%"
      bg="#010316"
      px={4}
      py={2}
      zIndex={1}
      boxShadow="md"
      color={"white"}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          icon={<HamburgerIcon boxSize={7} />}
          aria-label="Menu"
          variant=""
          mr={4}
        />

        <Spacer />

        <Menu>
          <MenuButton
            as={IconButton}
            icon={<BellIcon boxSize={7} />}
            variant=""
            aria-label="Notificaciones"
            onClick={handleBellClick}
          />
        </Menu>
        <Link href="auth/login">
          <IconButton
            icon={<GenericAvatarIcon boxSize={8} />}
            variant=""
            aria-label="Usuario"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;

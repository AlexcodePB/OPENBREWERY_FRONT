"use client";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  GenericAvatarIcon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Importamos useRouter para gestionar la navegación
import { useEffect, useState } from "react";

const Navbar = () => {
  const toast = useToast();
  const router = useRouter();
  const pathname = usePathname(); // Obtén el pathname aquí
  const [isDynamicRoute, setIsDynamicRoute] = useState(false);

  useEffect(() => {
    const checkIfDynamicRoute = () => {
      if (pathname.includes("/bars/") || pathname.includes("/auth/")) {
        setIsDynamicRoute(true);
      } else {
        setIsDynamicRoute(false);
      }
    };

    checkIfDynamicRoute();
  }, [pathname]);

  const handleBellClick = () => {
    toast({
      title: "Notificación",
      description: "Tienes nuevas notificaciones.",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "subtle",
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
        {isDynamicRoute ? (
          <IconButton
            color={"white"}
            icon={<ArrowBackIcon boxSize={7} />}
            aria-label="Volver"
            variant="ghost"
            mr={4}
            onClick={() => router.back()} // Volver a la página anterior
          />
        ) : (
          <Menu>
            <MenuButton
              color={"white"}
              as={IconButton}
              icon={<HamburgerIcon boxSize={7} />}
              aria-label="Abrir menú"
              variant="solid"
              mr={4}
            />
            <MenuList color={"black"}>
              <MenuItem>
                <Link href="/auth/register">Registrarse</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/settings">Ajustes</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        <Spacer />

        <Menu>
          <MenuButton
            color={"white"}
            as={IconButton}
            icon={<BellIcon boxSize={7} />}
            variant="ghost"
            aria-label="Notificaciones"
            onClick={handleBellClick}
          />
        </Menu>

        <Link href="/auth/login">
          <IconButton
            icon={<GenericAvatarIcon boxSize={8} />}
            variant="ghost"
            aria-label="Usuario"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;

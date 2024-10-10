"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GenericAvatarIcon,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { auto } from "@popperjs/core";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("User data submitted:", data);
    toast({
      title: "Inicio de sesión exitoso",
      description: "Has iniciado sesión correctamente.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="#010316"
      p={8} // Aumentar el padding para mayor espacio
      w={{ base: "90%", md: "400px" }} // Ancho responsivo
      h="85vh"
      borderRadius="md"
      boxShadow="lg"
      mx="auto"
    >
      <Heading as="h2" size="lg" textAlign="center" color="white" mb={6}>
        Iniciar Sesión
        <GenericAvatarIcon ml={auto} mr={auto} boxSize={60} />
      </Heading>
      <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel color="white">Correo Electrónico</FormLabel>
          <Input
            type="email"
            placeholder="Ingresa tu correo"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Ingresa un correo electrónico válido",
              },
            })}
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            borderRadius="md"
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel color="white">Contraseña</FormLabel>
          <Input
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "Este campo es obligatorio",
            })}
            bg="gray.700"
            color="white"
            borderColor="gray.600"
            borderRadius="md"
          />
          {errors.password && (
            <Text color="red.500">{errors.password.message}</Text>
          )}
        </FormControl>
        <Button
          type="submit"
          color="white"
          bgGradient={"linear(to-r, #3c3fe8, #de1fd6)"}
          width="full"
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
        >
          Iniciar Sesión
        </Button>
      </VStack>
      <Text textAlign="center" color="gray.400" mt={4}>
        ¿No tienes una cuenta?{" "}
        <Link
          href="/auth/register"
          style={{ color: "teal.300", textDecoration: "underline" }}
        >
          Registrarse
        </Link>
      </Text>
    </Box>
  );
};

export default LoginPage;

"use client";
import { createNewUser } from "@/libs/api";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GenericAvatarIcon,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const response = await createNewUser(data);
      console.log("User data submitted:", data);
      toast({
        title: "Registro exitoso",
        description: "Te has registrado correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/auth/login");
      console.log(response);
    } catch (error: any) {
      console.error("Error al registrar el usuario:", error);
      toast({
        title: "Error en el registro",
        description:
          error?.response?.data?.message ||
          "Hubo un problema al registrarte. Inténtalo de nuevo.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      bg="#010316"
      p={8}
      w={{ base: "90%", md: "400px" }}
      h="85vh"
      borderRadius="md"
      boxShadow="lg"
      mx="auto"
      align="center"
      justify="center"
    >
      <Box w="full">
        <Heading as="h2" size="lg" textAlign="center" color="white" mb={4}>
          Registro
          <GenericAvatarIcon ml="auto" mr="auto" boxSize={60} />
        </Heading>
        <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired isInvalid={!!errors.username}>
            <FormLabel color="white">Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("username", {
                required: "Este campo es obligatorio",
              })}
              bg="gray.700"
              color="white"
              borderColor="gray.600"
              _placeholder={{ color: "gray.500" }}
            />
            {errors.username && (
              <Text color="red.500">{errors.username.message}</Text>
            )}
          </FormControl>
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
              _placeholder={{ color: "gray.500" }}
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel color="white">Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres.",
                },
              })}
              bg="gray.700"
              color="white"
              borderColor="gray.600"
              _placeholder={{ color: "gray.500" }}
            />
            {errors.password && (
              <Text color="red.500">{errors.password.message}</Text>
            )}
          </FormControl>
          <Button
            type="submit"
            color={"white"}
            bgGradient={"linear(to-r, #3c3fe8, #de1fd6)"}
            width="full"
            isLoading={loading}
          >
            Registrarse
          </Button>
        </VStack>
        <Text textAlign="center" color="gray.400" mt={4}>
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            style={{ color: "teal.300", textDecoration: "underline" }}
          >
            Iniciar sesión
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default RegisterPage;

"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("User data submitted:", data);
    toast({
      title: "Registro exitoso",
      description: "Te has registrado correctamente.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box
      bg="gray.900"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="gray.800"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        mx="auto"
      >
        <Heading as="h2" size="lg" textAlign="center" color="white" mb={4}>
          Registro
        </Heading>
        <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel color="white">Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("name", { required: "Este campo es obligatorio" })}
              bg="gray.700"
              color="white"
              borderColor="gray.600"
              _placeholder={{ color: "gray.500" }} // Color del placeholder
            />
            {errors.name && <Text color="red.500">{errors.name.message}</Text>}
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
              _placeholder={{ color: "gray.500" }} // Color del placeholder
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
              })}
              bg="gray.700"
              color="white"
              borderColor="gray.600"
              _placeholder={{ color: "gray.500" }} // Color del placeholder
            />
            {errors.password && (
              <Text color="red.500">{errors.password.message}</Text>
            )}
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Registrarse
          </Button>
        </VStack>
        <Text textAlign="center" color="gray.400" mt={4}>
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" style={{ color: "teal.300" }}>
            Iniciar sesión
          </a>
        </Text>
      </Box>
    </Box>
  );
};
export default RegisterPage;

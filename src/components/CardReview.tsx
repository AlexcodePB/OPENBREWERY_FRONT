import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

interface ReviewCardProps {
  userName: string;
  userPhoto?: string; // URL de la foto del usuario
  comment: string;
}

const ReviewCard = ({ userName, userPhoto, comment }: ReviewCardProps) => {
  return (
    <Box width="100%" overflow="hidden" p={4} color="white" mb={4}>
      <Flex mb={4}>
        <HStack spacing={4}>
          <Avatar name={userName} src={userPhoto} />
          <Text fontWeight="bold" fontSize="lg">
            {userName}
          </Text>
        </HStack>
        <Spacer />
        <Center>
          <Button size="sm" variant="ghost" colorScheme="red">
            Responder
          </Button>
        </Center>
      </Flex>
      <Text>{comment}</Text>
    </Box>
  );
};

export default ReviewCard;

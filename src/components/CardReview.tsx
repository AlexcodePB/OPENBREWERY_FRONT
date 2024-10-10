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
  userPhoto?: string;
  comment: string;
}

const ReviewCard = ({ userName, userPhoto, comment }: ReviewCardProps) => {
  return (
    <Box width="100%" overflow="hidden" color="white" mb={4}>
      <Flex mb={2}>
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

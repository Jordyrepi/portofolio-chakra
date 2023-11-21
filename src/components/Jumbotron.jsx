import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

export const Jumbotron = () => {
  return (
    <Box bg="black">
      <Container maxW="6xl">
        <Flex height="650px">
          <Flex
            flexDir="column"
            color="white"
            flex={1}
            justifyContent="center"
            px="30px"
          >
            <Text as="h1" fontSize="35px" fontWeight="bold">
              Jordy Juniqno Grifith Repi
            </Text>
            <Text my="20px">
              Saya adalah seorang yang antusias terhadap dunia teknologi dan
              Sedang mengejar impian sebagai full stack web developer di
              Purwadhika.Menyukai tantangan kompleks dalam coding dan problem-solving
            </Text>
            <Button py="24px" colorScheme="teal" variant="outline">
              lets get started
            </Button>
          </Flex>
          <Flex flex={1} px="72px" alignItems="center">
            <Image
              src="fotoporto.png"
              alt="my photo"
              rounded="40px"
              width="400px"
              height="500px"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

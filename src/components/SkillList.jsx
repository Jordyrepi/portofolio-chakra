import { Container, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const SkillList = () => {
  return (
    <Container>
      <Flex flexDir="column" textAlign="center" width="570px" mx="auto" paddingRight="90px">
        <Text fontSize="32px" fontWeight="bold" fontFamily="sans-serif">
          SKILL
        </Text>
      </Flex>
    <Grid
      h="200px"
      templateRows="repeat(3, 1fr)"  // Menambahkan satu baris tambahan
      templateColumns="repeat(3, 1fr)"
      gap="100px"
    >

      <GridItem>
        <Image src="logojs.png" alt=" JavaScript" objectFit="cover" w="100%" h="100%" rounded="15px" />
      </GridItem>

      <GridItem>
        <Image src="logoreact.png" alt="React" objectFit="cover" w="100%" h="100%" />
      </GridItem>

      <GridItem>
        <Image src="logochakra.png" alt="chakra" objectFit="cover" w="100%" h="100%" />
      </GridItem>
    </Grid>
    </Container>
  );
};

export default SkillList;

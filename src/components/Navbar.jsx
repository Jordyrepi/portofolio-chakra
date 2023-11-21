import { Flex, Heading, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <VStack
    h="50px"
    textAlign="center"
    bgGradient="linear(to-r, #68697a, #1f203a)"
  >
    <Flex w="100%" mr="40px" mt="10px">
      <Heading ml="8" size="md" fontWeight="semibold" color="black">
        <Image src="logoportonavbar.png" alt="Logo" w="80x" h="20px" />
      </Heading>
      <Spacer></Spacer>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Text ml="5">Home</Text>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Text ml="5">Study Track</Text>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Text ml="5">Skill</Text>
      </Link>
    </Flex>
  </VStack>
  );
};


export default Navbar

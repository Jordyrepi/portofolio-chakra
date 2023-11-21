import {
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

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
        <a href="#home" style={{ textDecoration: "none", color: "white" }}>
          <Text ml="5">Home</Text>
        </a>
        <a href="#study" style={{ textDecoration: "none", color: "white" }}>
          <Text ml="5">Study Track</Text>
        </a>
        <a href="#skill" style={{ textDecoration: "none", color: "white" }}>
          <Text ml="5">Skill</Text>
        </a>
      </Flex>
    </VStack>
  );
};

export default Navbar;

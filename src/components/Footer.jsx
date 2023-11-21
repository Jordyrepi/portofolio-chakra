import { ChakraProvider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function Footer() {
  return (
    <ChakraProvider>
      <VStack h="50px" textAlign="center" bg="#edf2f7" boxShadow="dark-lg">
        <Flex w="100%" mr="40px" mt="10px">
          <Heading ml="8" size="md" fontWeight="semibold" color="black">
            <Text
              color="black"
              mb={{ base: "20px", xl: "0px" }}
            >
              {" "}
              &copy;
              <Text as="span" fontWeight="500" ms="4px" color="#FF6C22" >
                2023 Made with Love
              </Text>
            </Text>
          </Heading>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default Footer;

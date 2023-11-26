import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgColor="grey" py="3">
      <Container maxWidth="6xl">
        <Flex justifyContent="space-between">
          <Text>© 2023 Made With Love</Text>
            <HStack gap={6} >
           <FaGit/>
           <FaInstagram />
           <FaLinkedin />
            </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

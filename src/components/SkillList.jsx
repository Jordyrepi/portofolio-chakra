import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";

const SkillList = () => {
  return (
    <Box bgColor="beige" id="skill" pt="50px" pb="25px">
     <Container maxWidth="6xl" >
        <Flex flex={1} justifyContent="center">
          <Text as="b" fontSize="4xl" fontFamily="inherit">
            Skill
          </Text>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} pt="40px"> 
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logojs.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">Javascript</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logochakra.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">Javascript</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logohtml.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">HTML</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logocss.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">CSS</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logoreact.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">React</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem justifySelf="center">
            <Card boxShadow="dark-lg" rounded="15px" >
              <CardBody>
              <Image src="logogit.png" rounded="35px" w="200px" h="200px" />
              <Stack mt="3" spacing="3" textAlign="center">
                <Text as="b" fontSize="2xl">Git Hub</Text>
              </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Box>
     

  );
};

export default SkillList;

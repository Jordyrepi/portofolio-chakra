import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";

const StudiesTrack1 = () => {
  return (
    <Box bgColor="bisque" id="study">
      <Container maxW="6xl" pt="24px" >
        <Flex flexDir="column" textAlign="center" width="570px" mx="auto">
          <Text fontSize="32px" fontWeight="bold">
            Study Track
          </Text>
          <Text fontSize="12px" fontFamily="cursive">
            Purwadhika Digital Technology School telah mentransformasi dan
            mencetak talenta digital berkualitas <b>sejak tahun 1987.</b>
            Purwadhika telah menjadi lembaga pendidikan teknologi digital
            berpengalaman dan terpercaya selama lebih dari 35 tahun sejak 1987.
          </Text>
        </Flex>

        <Flex mt="60px">
          <Flex flex={1} flexDir="column">
            <Tag
              colorScheme="orange"
              width="fit-content"
              variant="subtle"
              size="md"
              px="16"
            >
              P U R W A D H I K A
            </Tag>
            <Text fontSize="32px" fontWeight="bold">
              {" "}
              JC Full Stack Web Development{" "}
            </Text>
            <Text fontFamily="revert-layer" my="10px" mb="30px">
              Melalui program Job Connector Bootcamp, kami ingin membuka
              kesempatan untuk siapa saja yang memulai karir di industri
              digital. Oleh karena itu, untuk mengikuti program ini, peserta
              program tidak harus memiliki background coding atau IT sebelumnya
            </Text>
            <a href="#track">
              <Button width="fit-content" bgColor="orange" px="28px">
                activity
              </Button>
            </a>
          </Flex>
          <Flex flex={1}>
            <Image
              borderRadius="10px"
              rounded="30px"
              height="350px"
              width="600px"
              src="purwahalaman.png"
            />
          </Flex>
        </Flex>

        <Flex mt="90px" id="track">
          <Flex flex={1}>
            <Image
              borderRadius="10px"
              rounded="30px"
              height="350px"
              width="450px"
              src="offlineclass.png"
            />
          </Flex>
          <Flex flex={1} flexDir="column" marginLeft="15px">
            <Tag
              colorScheme="blue"
              width="fit-content"
              variant="subtle"
              size="md"
              px="16"
            >
              On Campus Batam
            </Tag>
            <Text fontSize="32px" fontWeight="bold">
              {" "}
              Offline Class 7 hours Learning
            </Text>
            <Text fontFamily="revert-layer" my="10px" mb="30px">
              Khusus untuk kampus Batam, terdapat beberapa perbedaan. Saat ini
              Purwadhika Campus Batam hanya tersedia untuk program Job Connector
              Bootcamp metode belajar On Campus dengan berbagai fasilitas
              tambahan, seperti akomodasi tempat tinggal, makan siang selama
              masa belajar dan fasilitas pendukung lainnya.
            </Text>
          </Flex>
        </Flex>

        <Flex mt="60px">
          <Flex flex={1} flexDir="column">
            <Tag
              colorScheme="green"
              width="fit-content"
              variant="subtle"
              size="md"
              px="16"
            >
              E V E N T
            </Tag>
            <Text fontSize="32px" fontWeight="bold">
              {" "}
              Open Space Event
            </Text>
            <Text my="10px" mb="30px">
              Purwadhika juga memiliki ruangan yang fleksibel yaitu open space
              yang sering digunakan untuk event dan bisa digunakan juga untuk
              belajar,bisa juga digunakan untuk ruangan diskusi.
            </Text>
          </Flex>
          <Flex flex={1} ml="30px" pb="70px" pr="70px" pl="60px">
            <Image
              borderRadius="10px"
              rounded="30px"
              height="350px"
              width="600px"
              src="openspace.png"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default StudiesTrack1;

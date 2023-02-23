"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Link,
  Stack,
} from "@chakra-ui/react";
import heroCircle from "@/assets/images/hero-1-circle-2.png";
import heroDot from "@/assets/images/hero-1-dot-2.png";
import shape3 from "@/assets/images/shape-03.png";
import heroDots from "@/assets/images/hero-1-dot.png";
import imageCode from "@/assets/images/imageCode.png";
import { bannerData } from "@/utils/data";
import MotionBox from "@/components/MotionBox";
import { fadeIn } from "@/utils/framerMotion";

const Banner = () => {
  return (
    <Container flex="1" maxWidth={"full"} padding={0}>
      <Box bg={"#EDEEF3"} minH="container.sm" position={"relative"}>
        <Box position={"absolute"} left={0} top="40%">
          <Image src={shape3} alt="image" />
        </Box>
        <Box position={"absolute"} left={0} top="20%">
          <Image src={heroCircle} alt="image" />
        </Box>
        <Box position={"absolute"} right={0} top="40%">
          <Image src={heroDot} alt="image" />
        </Box>
        <SimpleGrid columns={2} spacing={8}>
          <Container maxW={"lg"} zIndex="2">
            <Box pt={95}>
              <Heading color="blue.500" size={"sm"} mb={34}>
                {bannerData.heading}
              </Heading>
              <Heading mb={25} size="2xl">
                {bannerData.subTitle}
              </Heading>
              <Text color="#575757" fontSize={"sm"}>
                {bannerData.description}
              </Text>
              <Box pt={18}>
                <Link
                  as={NextLink}
                  isExternal
                  href={"https://portal.piaic.org/signup"}
                  _hover={{
                    outline: "none",
                  }}
                >
                  <Button
                    colorScheme="blue"
                    padding="0px 40px"
                    height={50}
                    _hover={{
                      bg: "red.500",
                    }}
                    display={{ base: "none", md: "inline-flex" }}
                  >
                    Explore Course
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
          <Stack zIndex="1" position={"relative"}>
            <Container maxW={"lg"} pt={95}>
              <MotionBox
                padding={"15px 25px 20px"}
                bg="white"
                boxShadow="0 30px 60px 0 rgb(1 11 60 / 14%)"
                borderRadius={4}
                position="absolute"
                right="35%"
                bottom={"20px"}
                display={{ base: "none", md: "block" }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatType: "loop",
                  },
                }}
                animate={{
                  y: ["2rem", "4rem", "6rem"],
                }}
              >
                <Text fontSize={"sm"} color="#474956">
                  Tomorrow is our
                </Text>
                <Heading size="sm">“When I Grow Up” Spirit Day!</Heading>
              </MotionBox>
              <MotionBox
                position={"absolute"}
                zIndex={-1}
                bottom="100px"
                left="10%"
                display={{ base: "none", md: "block" }}
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src={heroDots} alt="dots" />
              </MotionBox>
              <MotionBox
                variants={{
                  hidden: {},
                  show: {},
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <MotionBox
                  variants={fadeIn("right", "tween", 0.2, 1)}
                  borderRadius={"40px 4px 40px 4px"}
                  objectFit={"cover"}
                  overflow="hidden"
                >
                  <Image src={imageCode} alt="get-started" />
                </MotionBox>
              </MotionBox>
            </Container>
          </Stack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
export default Banner;

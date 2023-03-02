/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import MotionBox from "@/components/MotionBox";
import { courseStatic } from "@/utils/data";
import { fadeIn } from "@/utils/framerMotion";

const CourseStatics = () => {
  return (
    <Container maxW={"container.xl"} pt={120} pb={30}>
      <Heading textAlign={"center"} size={"2xl"}>
        We Are
        <Heading as="span" size={"2xl"} color="blue.500">
          {" "}
          Proud
        </Heading>
      </Heading>
      <Text textAlign={"center"} py={3} color="#53545B">
        You don't have to struggle alone, you've got our assistance and help.
      </Text>
      <MotionBox
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          }}
          spacing={8}
        >
          {courseStatic.map((item, index) => (
            <Card
              key={index}
              shadow={"none"}
              padding="50px 30px"
              justify={"center"}
              alignItems="center"
              bg={item.background}
            >
              <CardBody padding={0}>
                <Flex justify={"center"} mb={2}>
                  <Image src={item.icon} width={60} height={60} alt="image" />
                </Flex>
                <Heading textAlign={"center"} mb={1} color="white">
                  {item.value}
                </Heading>
                <Text textAlign={"center"} color="whiteAlpha.800">
                  {item.subTitle}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Container>
  );
};
export default CourseStatics;

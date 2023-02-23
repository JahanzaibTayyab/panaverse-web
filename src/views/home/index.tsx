"use client";

import { Flex } from "@chakra-ui/react";
import Banner from "./sections/Banner";
import CourseStatics from "./sections/CourseStatics";

const Home = () => {
  return (
    <Flex as="main" role="main" direction="column" flex="1">
      <Banner />
      <CourseStatics />
    </Flex>
  );
};
export default Home;

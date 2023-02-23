"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box as="nav" role="presentation">
      <Flex
        bg="white"
        px={{ base: 4 }}
        minH="80px"
        borderBottom={1}
        borderStyle="solid"
        borderColor={"gray.200"}
        align="center"
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
          <Link as={NextLink} href="/">
            <Image
              src="/panaverse.png"
              alt="panaverse-logo"
              width={100}
              height={50}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
            flex={1}
          >
            <DesktopNav />
          </Flex>
          <Stack
            flex={{ base: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={8}
          >
            <Link
              as={NextLink}
              isExternal
              href={"https://github.com/panaverse"}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button
                fontWeight={400}
                variant={"link"}
                color="black"
                rightIcon={<ExternalLinkIcon />}
              >
                Github
              </Button>
            </Link>
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
                Apply
              </Button>
            </Link>
          </Stack>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            justify="end"
          >
            <IconButton
              onClick={onToggle}
              bg="transparent"
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;

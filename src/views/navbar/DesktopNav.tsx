"use client";
import NextLink from "next/link";
import { Text, Stack, Box, Link } from "@chakra-ui/react";
import { NAV_ITEMS } from "@/utils/constants";

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((nav) => (
        <Box key={nav.label}>
          <Link
            as={NextLink}
            href={nav.href ?? "#"}
            p={2}
            fontSize="sm"
            color="gray.900"
            _hover={{ color: "blue" }}
          >
            {nav.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
export default DesktopNav;

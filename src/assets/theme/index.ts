"use client";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      "html, body": {
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
      },
    }),
  },
  colors: {
    yellow: {
      "50": "#FFF6E5",
      "100": "#FFE7B8",
      "200": "#FFD88A",
      "300": "#FFC85C",
      "400": "#FFB92E",
      "500": "#FFAA00",
      "600": "#CC8800",
      "700": "#996600",
      "800": "#664400",
      "900": "#332200",
    },
    blue: {
      "50": "#E7EFFD",
      "100": "#BDD1F9",
      "200": "#93B4F6",
      "300": "#6997F2",
      "400": "#3E79EF",
      "500": "#145CEB",
      "600": "#104ABC",
      "700": "#0C378D",
      "800": "#08255E",
      "900": "#04122F",
    },
    red: {
      "50": "#FDE8EB",
      "100": "#F9BEC7",
      "200": "#F594A2",
      "300": "#F06A7E",
      "400": "#EC415A",
      "500": "#E81735",
      "600": "#BA122B",
      "700": "#8B0E20",
      "800": "#5D0915",
      "900": "#2E050B",
    },
  },
});

export default theme;

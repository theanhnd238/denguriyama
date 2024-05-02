import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const CustomerTheme: Record<string, any> = {
  styles: {
    global: {
      html: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
      body: {
        maxW: "1920px",
        minH: "100vh",
        margin: "0 auto",
        lineHeight: "1.4",
        fontWeight: "400",
        fontSize: { base: "12px", md: "13px", lg: "13px" },
        color: "black",
        bgColor: "white",
        position: "relative",
      },
      img: {
        display: "inline-block",
        width: "100%",
        objectFit: "cover",
      },
    },
  },

  fonts: {
    body: "Noto Sans JP",
  },

  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    mid: "1280px",
    lg: "1366px",
    xl: "1600px",
  },

  components: {},
};

export const theme = extendTheme(CustomerTheme);

import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./header";

interface BannerProps {
  url: string;
  pageName: string;
}
function Banner({ url, pageName }: BannerProps) {
  return (
    <Box
      backgroundImage={`url(${url})`}
      bgPosition="top center"
      bgRepeat="no-repeat"
      h="650px"
      backgroundSize="contain"
    >
      <Header pageName={pageName} />
    </Box>
  );
}

export default Banner;

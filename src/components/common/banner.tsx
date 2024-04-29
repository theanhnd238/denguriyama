import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Header from "./header";

interface BannerProps {
  url: string;
  pageName: string;
}
function Banner({ url, pageName }: BannerProps) {
  return (
    <Box h="650px" w="100%">
      <Image w="100%" h="100%" src={url} alt="banner" objectFit="fill" />
      <Header pageName={pageName} />
    </Box>
  );
}

export default Banner;

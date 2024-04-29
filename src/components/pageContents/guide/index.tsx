import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";

function GuidePageContent() {
  return (
    <Box
      w="80%"
      bgColor={"accent.white"}
      borderRadius="4px"
      boxShadow=" rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      m="20px 0"
      p="20px"
    >
      <Text textAlign="center" fontSize="48px" fontWeight="bold">
        店舗案内{" "}
      </Text>
      <Divider mb="30px" />
    </Box>
  );
}

export default GuidePageContent;

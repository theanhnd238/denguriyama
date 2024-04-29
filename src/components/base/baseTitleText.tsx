import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
interface BaseTitleTextProps {
  title: string;
  description: string;
  subTitle?: string;
  width?: string;
}
function BaseTitleText({
  title,
  description,
  subTitle,
  width = "200px",
}: BaseTitleTextProps) {
  return (
    <Box w={width}>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="35px"
        borderRadius="20px"
        bgColor="red"
        color="#ffffff"
        fontSize="18px"
      >
        <Text> {title}</Text>
        <span style={{ fontSize: "12px" }}>{subTitle}</span>
      </Flex>
      <Text fontWeight="bold" fontSize="14px" p="7px ">
        {description}
      </Text>
    </Box>
  );
}

export default BaseTitleText;

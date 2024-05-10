import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { convertStringToYenNoText } from "../../../services/util.service";
interface BaseProductProps {
  title: string;
  price: string;
  src: string;
  description?: string;
  width?: string;
  height?: string;
}
function BaseProduct({
  title,
  price,
  src,
  description,
  height = "200px",
  width = "250px",
}: BaseProductProps) {
  return (
    <Flex flexDir="column" position="relative">
      <Image
        rounded={"md"}
        alt={"product image"}
        src={src}
        fit={"cover"}
        align={"center"}
        h={height}
        w={width}
      />
      <Flex
        flexDir="column"
        alignItems="center"
        mt="10px"
        fontSize="20px"
        fontWeight="bold"
      >
        <Text>{title}</Text>
        <Text w={width} fontSize="16px" fontWeight="normal">
          {description}
        </Text>
        <Text color="red">
          {convertStringToYenNoText(price)}
          <span>円</span>
        </Text>
      </Flex>
    </Flex>
  );
}

export default BaseProduct;

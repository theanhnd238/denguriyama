import { Box, Divider, Flex, ResponsiveValue, Text } from "@chakra-ui/react";
import React from "react";
import { convertStringToYenNoText } from "../../../services/util.service";

interface BasePriceProps {
  title: string;
  price: string;
  subTitle?: string;
  note?: string;
  width?: string;
}
function BasePrice({
  title,
  price,
  subTitle,
  note,
  width = "300px",
}: BasePriceProps) {
  return (
    <Box marginBottom={{ base: "36px", md: "30px" }}>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        fontSize="20px"
        fontWeight="bold"
        justifyContent="space-between"
        w={width}
      >
        <Box>
          <Flex alignItems="flex-end">
            <Text mr="10px">{title}</Text>
            <span style={{ fontSize: "14px", fontWeight: "normal" }}>
              {note}
            </span>
          </Flex>
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>
            {subTitle}
          </span>
        </Box>
        <Box color="red">
          {convertStringToYenNoText(price)}
          <span>円</span>
        </Box>
      </Box>
      <Divider borderColor="#707070" />
    </Box>
  );
}

export default BasePrice;

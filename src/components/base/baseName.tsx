import { Box, Divider, Flex, Text } from "@chakra-ui/react";
interface BaseNameProps {
  name: string;
}
function BaseName({ name }: BaseNameProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mb="15px"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        display={{ base: "none", md: "block" }}
        h="5px"
        w="40px"
        border="1px solid"
        borderRadius="5px"
      />
      <Text
        textAlign="center"
        fontSize={{ base: "28px", mid: "36px" }}
        fontWeight="bold"
        m="0 10px"
      >
        {name}
      </Text>
      <Divider display={{ base: "block", md: "none" }} />
      <Box
        display={{ base: "none", md: "block" }}
        h="5px"
        w="40px"
        border="1px solid"
        borderRadius="5px"
      />
    </Flex>
  );
}

export default BaseName;

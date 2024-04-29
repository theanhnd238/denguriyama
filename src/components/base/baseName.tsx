import { Box, Flex, Text } from "@chakra-ui/react";
interface BaseNameProps {
  name: string;
}
function BaseName({ name }: BaseNameProps) {
  return (
    <Flex alignItems="center" justifyContent="center" mb="15px">
      <Box h="5px" w="40px" border="1px solid" borderRadius="5px" />
      <Text textAlign="center" fontSize="36px" fontWeight="bold" m="0 10px">
        {name}
      </Text>
      <Box h="5px" w="40px" border="1px solid" borderRadius="5px" />
    </Flex>
  );
}

export default BaseName;

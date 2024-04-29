import { Box, Flex, Text } from "@chakra-ui/react";

interface BaseTitleProps {
  title: string;
}

function BaseTitle({ title }: BaseTitleProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h="50px"
      bgColor="rgba(0 ,0,0,0.8)"
    >
      <Text ml="20px" color="#FFFFFF" fontSize="20px" fontWeight="bold">
        {title}
      </Text>
    </Flex>
  );
}

export default BaseTitle;

import Category from "@/components/base/category";
import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import data from "../../../data/appetizer.json";

function AppetizerPageContent() {
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
        前菜・一品料理
      </Text>
      <Divider mb="30px" />

      <Flex justifyContent="space-around">
        <VStack>
          <Category name="漬物" data={data.topLeft} />
          <Category name="サラダ" data={data.bottomLeft} />
        </VStack>
        <Category name="一品" data={data.topRight} />
      </Flex>

      <Text textAlign="center" fontSize="14px" mt="15px">
        ※　表示価格はすべて税込価格です。
      </Text>
    </Box>
  );
}

export default AppetizerPageContent;
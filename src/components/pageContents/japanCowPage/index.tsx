import BasePrice from "@/components/base/basePrice";
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import data from "../../../data/wagyuu.json";
import BaseProduct from "@/components/base/baseProduct";
import MeanDetail from "./meanDetail";

function JapanCowPageContent() {
  return (
    <Box
      w="80%"
      bgColor={"accent.white"}
      borderRadius="4px"
      boxShadow=" rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      mb="20px"
      p="20px"
    >
      <MeanDetail />
      <Box m="40px 0">
        <Text textAlign="center" fontSize="48px" fontWeight="bold">
          刺し物
        </Text>
        <Divider mb="30px" />
        <HStack justifyContent="space-around">
          {data.namaMono.map((item, index) => (
            <BaseProduct
              key={index}
              title={item.title}
              price={item.price}
              src={item.src}
            />
          ))}
        </HStack>
      </Box>

      <Text textAlign="center" fontSize="48px" fontWeight="bold">
        和牛肉
      </Text>
      <Divider />
      <Flex justifyContent="space-around" mt="40px">
        <Box>
          {data.topLeft.map((item, index) => (
            <BasePrice key={index} title={item.title} price={item.price} />
          ))}
        </Box>
        <Box>
          {data.topRight.map((item, index) => (
            <BasePrice key={index} title={item.title} price={item.price} />
          ))}
        </Box>
      </Flex>
      <Flex justifyContent="space-around" mt="30px">
        <Box>
          {data.bottomLeft.map((item, index) => (
            <BasePrice key={index} title={item.title} price={item.price} />
          ))}
        </Box>
        <Box>
          {data.bottomRight.map((item, index) => (
            <BasePrice key={index} title={item.title} price={item.price} />
          ))}
        </Box>
      </Flex>
      <Text textAlign="center" fontSize="14px" mt="15px">
        ※　表示価格はすべて税込価格です。
      </Text>
    </Box>
  );
}

export default JapanCowPageContent;

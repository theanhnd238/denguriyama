import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import MeanDetail from "./meanDetail";
import data from "../../../data/yakimono.json";
import BaseName from "@/components/base/baseName";
import Category from "../../base/category";

function YakimonoPageContent() {
  return (
    <Box
      w={{ base: "100%", mid: "80%" }}
      bgColor={"accent.white"}
      borderRadius="4px"
      boxShadow={{
        mid: " rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }}
      m={{ mid: "20px" }}
    >
      <MeanDetail />
      <Box m="40px 0" w="100%">
        <Text
          textAlign="center"
          fontSize={{ base: "36px", mid: "48px" }}
          fontWeight="bold"
        >
          焼き物
        </Text>
        <Divider mb="30px" />

        <Flex justifyContent="space-around">
          <VStack>
            <Category name="豚" data={data.pig} />
            <Category name="鳥" data={data.chicken} />
          </VStack>
          <VStack spacing="30px">
            <Category name="盛り合わせ" data={data.mix} />
            <Category name="野菜" data={data.vegetable} />
            <Category name="トッピング" data={data.topping} />
          </VStack>
        </Flex>
      </Box>
      <Flex flexDir="column">
        <Text
          textAlign="center"
          fontSize={{ base: "36px", mid: "48px" }}
          fontWeight="bold"
        >
          ホルモン盛り合わせ
        </Text>
        <Divider mb="30px" />
        <Flex
          justifyContent="space-around"
          flexDir={{ base: "column", mid: "row" }}
        >
          <VStack
            fontSize={{ base: "16px", md: "20px" }}
            mb={{ base: "40px", mid: "" }}
          >
            <BaseName name="5点盛り" />
            <Flex alignItems="center" justifyContent="center">
              <Text
                p="15px"
                border="1px solid"
                fontWeight="bold"
                mr={{ base: "5px", md: "20px" }}
              >
                シオ
              </Text>
              <Box w="250px">
                <Text> ホルモン　ギャラ　センマイ　</Text>
                <Text> ハツ　豚ホルモン</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text
                p="15px"
                border="1px solid"
                fontWeight="bold"
                mr={{ base: "5px", md: "20px" }}
              >
                タレ
              </Text>
              <Box w="250px">
                <Text> ホルモン　ハツモト　ハチノス　</Text>
                <Text> 　レバー　豚ホルモン</Text>
              </Box>
            </Flex>
          </VStack>
          <VStack fontSize={{ base: "16px", md: "20px" }}>
            <BaseName name="3点盛り" />
            <Flex alignItems="center" justifyContent="center">
              <Text
                p="10px"
                border="1px solid"
                fontWeight="bold"
                mr={{ base: "5px", md: "20px" }}
                width="110px"
              >
                サッパリ系
              </Text>
              <Box w="250px">
                <Text> ハツ　上ミノ　センマイ</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text
                p="10px"
                border="1px solid"
                fontWeight="bold"
                mr={{ base: "5px", md: "20px" }}
                width="110px"
              >
                コリコリ系
              </Text>
              <Box w="250px">
                <Text> ペラ　豚ナンコツ　ウルテ　</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text
                p="10px"
                border="1px solid"
                fontWeight="bold"
                mr={{ base: "5px", md: "20px" }}
                width="110px"
              >
                コッテリ系
              </Text>
              <Box w="250px">
                <Text>
                  ホルモン　コップチャン <br /> シビレ　
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Flex>
        <Text textAlign="center" m="30px " fontSize="14px">
          ※　その日の仕入状況で一部内容を変更する場合がございます。
        </Text>
      </Flex>
      <Divider />
      <Text textAlign="center" fontSize="14px" m="15px 0">
        ※　表示価格はすべて税込価格です。
      </Text>
    </Box>
  );
}

export default YakimonoPageContent;

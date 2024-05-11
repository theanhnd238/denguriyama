import BaseName from "@/components/base/baseName";
import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import data from "../../../data/drink.json";
import Category from "@/components/base/category";
import BasePrice from "@/components/base/basePrice";

function DrinkPageContent() {
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
      <Box m="40px 0" w="100%">
        <Text
          textAlign="center"
          fontSize={{ base: "36px", mid: "48px" }}
          fontWeight="bold"
        >
          ドリンク
        </Text>
        <Divider mb="30px" />
        <Flex justifyContent="space-around">
          <VStack>
            <Box>
              <BaseName name="日本酒" />
              <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="bold">
                季節の日本酒(黒板参照)
              </Text>
            </Box>
            <Box>
              <BaseName name="本格焼酎（90ml）" />
              <Flex flexDir={{ base: "column", md: "row" }} alignItems="center">
                <Text fontSize="20px" fontWeight="bold" mr="15px">
                  【芋】
                </Text>
                <Category name="" data={data.imo} />
              </Flex>
              <Flex flexDir={{ base: "column", md: "row" }} alignItems="center">
                <Text fontSize="20px" fontWeight="bold" mr="15px">
                  【麦】
                </Text>
                <Category name="" data={data.mugi} />
              </Flex>
            </Box>
            <Box ml={{ base: "", md: "50px" }}>
              <Category name="マッコリ" data={data.maccori} />
            </Box>
          </VStack>
          <VStack>
            <Box>
              <BaseName name="梅酒" />
              <Text fontSize="14px" m="10px 0">
                白加賀梅100%使用。
                <br />
                甘みと酸味のほど良いバランスの梅集
              </Text>
              <BasePrice
                title={data.umeshuu.title}
                price={data.umeshuu.price}
                subTitle={data.umeshuu.subTitle}
              />
            </Box>

            <Category name="焼酎" data={data.shouchuu1} />
            <Text textAlign="center" fontSize="12px">
              ※　ボトル焼酎　(３ヶ月間有効)
            </Text>
            <Category name="" data={data.shouchuu2} />

            <Category name="ワイン" data={data.wine} />
          </VStack>
        </Flex>
        <Text textAlign="center" fontSize="14px">
          ✋ストップ！20歳未満飲酒・飲酒運転。妊娠中や授乳期の飲酒はやめましょう。お酒は楽しく適量で。
        </Text>
        <Text textAlign="center" fontSize="14px" m="15px 0">
          ※　表示価格はすべて税込価格です。
        </Text>
      </Box>
    </Box>
  );
}

export default DrinkPageContent;

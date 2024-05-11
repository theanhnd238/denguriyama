import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import BaseProduct from "@/components/base/baseProduct";
import BaseName from "@/components/base/baseName";
import BasePrice from "@/components/base/basePrice";
import data from "../../../data/riceDish.json";
import Category from "@/components/base/category";

function RiceDishPageContent() {
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
          ご飯物
        </Text>
        <Divider mb="30px" />
        <Flex
          justifyContent={{ base: "center", mid: "space-around" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            mb={{ base: "40px", mid: "" }}
            display="flex"
            justifyContent="center"
          >
            <BaseProduct
              title="白スープ"
              price={data.soup.price}
              src="/images/soup.png"
              width="350px"
              height="300px"
            />
          </Box>
          <Box>
            <BaseName name="トッピング" />
            <Flex
              justifyContent={{ base: "space-around", mid: "space-between" }}
              flexDir={{ base: "row", md: "column", lg: "row" }}
            >
              <Box>
                {data.soup.topping1.map((item, index) => (
                  <BasePrice
                    key={index}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </Box>
              <Box>
                {data.soup.topping2.map((item, index) => (
                  <BasePrice
                    key={index}
                    title={item.title}
                    price={item.price}
                    note={item.note}
                  />
                ))}
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Divider border="1px dotted #000000" m="40px 0" />
        <Flex justifyContent="space-around">
          <Box>
            {data.other.map((item, index) => (
              <BasePrice
                key={index}
                title={item.title}
                price={item.price}
                note={item.note}
              />
            ))}
          </Box>
          <Category data={data.noodle} name="チゲ鍋" />
        </Flex>
        <Divider m="40px 0" />
        <Flex flexDir={"column"}>
          <BaseName name="デザート" />
          <Flex justifyContent="space-around">
            <BasePrice
              title={data.dessert[0].title}
              price={data.dessert[0].price}
              subTitle={data.dessert[0].subTitle}
            />
            <Box>
              <BasePrice
                title={data.dessert[1].title}
                price={data.dessert[1].price}
              />
              <BasePrice
                title={data.dessert[2].title}
                price={data.dessert[2].price}
              />
            </Box>
          </Flex>
          <Text textAlign="center" fontSize="14px" m="15px 0">
            ※　表示価格はすべて税込価格です。
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default RiceDishPageContent;

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Menu from "./menu";
import Commitment from "./commitment";
import SafetyAndSecurity from "./safetyAndSecurity";
import Restaurant from "./restaurant";
function HomePageContent() {
  return (
    <Box
      maxW="1280px"
      w="80%"
      bgColor={"accent.white"}
      borderRadius="4px"
      boxShadow=" rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      m="20px 0"
    >
      <Flex flexDir="column" alignItems="center" w="100%">
        <Box
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          p="50px 100px"
          // bgColor="#EFDBC3"
        >
          <Text textAlign="center" fontSize="42px" mb="20px">
            真心込めて、お客様をお待ちしております。
          </Text>
          <VStack alignItems="flex-start" fontSize="16px" spacing="10px">
            <Text>
              蕨駅東口から徒歩２分。2003年4月にオープンした焼肉・ホルモン屋。蕨　ホルモンでんぐり山。
            </Text>
            <Text>
              芝浦・大宮の屠場から直接、生の状態で仕入れた新鮮なホルモン類は25種類以上！正肉は黒毛和牛のA4・A5を使用！お酒も本格焼酎・梅酒・マッコリ等と充実。
            </Text>
            <Text>
              最後のシメは、当店自慢の白スープ！牛の骨をグツグツと18時間以上煮込んで出来た真っ白なスープ。あっさりしていて栄養たっぷりです。その他、キムチ類はもちろんタレ類も全て手作りです。
            </Text>
            <Text>
              店内には6～10名様でご利用できる個室もご用意しております。また当店では、お客様に安心して美味しく焼肉を楽しんでいただくため情報管理に努めております。
            </Text>
          </VStack>
        </Box>
        <Menu />
        <Restaurant />
        <Commitment />
        <SafetyAndSecurity />
      </Flex>
    </Box>
  );
}

export default HomePageContent;

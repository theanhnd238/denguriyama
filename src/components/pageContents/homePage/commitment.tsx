import BaseTitle from "@/components/base/baseTitle";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Commitment() {
  return (
    <Box>
      <BaseTitle title="でんぐり山のこだわり" />
      <Flex
        bgColor="#EFDBC3"
        w="100%"
        p={{ base: "", md: "50px 30px" }}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack
          w={{ md: "50%" }}
          alignItems="flex-start"
          fontSize="16px"
          spacing="10px"
          p={{ base: "20px", md: "0 40px" }}
          letterSpacing="1px"
        >
          <Text>
            芝浦・大宮の屠場から直接、生の状態で仕入れた新鮮なホルモン類は25種類以上！正肉は黒毛和牛のA4・A5をご用意しております。ホルモンの仕込みは、各部位ごとに違うやり方で、一つ一つ丁寧に、炭は焼肉に相性がいい国産備長炭を使用しております
          </Text>
          <Text>
            お酒も本格焼酎・梅酒・マッコリ等と充実。最後のシメは、当店自慢の白スープ！牛の骨をグツグツと18時間以上煮込んで出来た真っ白なスープ。あっさりしていて、栄養たっぷりです。その他、キムチ類はもちろんタレ類も全て手作り。
          </Text>
          <Text>
            店内には6～10名様でご利用できる個室もご用意しております。
            歓送迎会・新年会・忘年会などプライベートな空間でお楽しみください。
          </Text>
        </VStack>
        <Box w={{ md: "50%" }}>
          <Image
            h="350px"
            alt="meat"
            src="/images/kodawari.png"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Commitment;

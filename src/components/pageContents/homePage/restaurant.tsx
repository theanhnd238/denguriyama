import BaseTitle from "@/components/base/baseTitle";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Restaurant() {
  return (
    <Box>
      <BaseTitle title="レストラン" />
      <Flex
        w="100%"
        p="50px 30px"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack
          w="50%"
          alignItems="flex-start"
          fontSize="16px"
          spacing="10px"
          p="0 40px"
        >
          <Text>
            芝浦・大宮の屠場から直接、生の状態で仕入れた新鮮なホルモン類は25種類以上！正肉は黒毛和牛のA4・A5をご用意しております。ホルモンの仕込みは、各部位ごとに違うやり方で、一牛肉のトレーサビリティーとは、牛が、いつ、どこで生まれ、誰が、どのように育てたか、をお客様にお伝えするシステムです。
            国内で生まれた全ての牛には10桁の個体識別番号があたえられます。
            当店では、お客様に安心して美味しく焼肉を楽しんでいただくため情報管理に努めております。つ一つ丁寧に、炭は焼肉に相性がいい国産備長炭を使用しております
          </Text>
          <Text>独立行政法人家畜改良センター 「個体識別番号検索サービス」</Text>
          <Text></Text>
        </VStack>
        <Box w="50%">
          <Image
            h="350px"
            alt="safe"
            src="/images/restaurant.png"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Restaurant;

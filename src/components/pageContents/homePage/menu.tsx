import BaseTitle from "@/components/base/baseTitle";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function Menu() {
  const router = useRouter();
  return (
    <Box w="100%">
      <BaseTitle title="メニュー" />
      <Flex
        bgColor="#EFDBC3"
        w="100%"
        p="50px 30px"
        justifyContent="space-between"
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Flex
            cursor="pointer"
            _hover={{
              opacity: "60%",
              transform: "scale(1.1)",
            }}
            onClick={() => router.push("yakimono")}
          >
            <Image
              src="/images/yakimono.png"
              alt="yakimono"
              objectFit="contain"
            />
          </Flex>
          <Flex
            cursor="pointer"
            _hover={{
              opacity: "60%",
              transform: "scale(1.1)",
            }}
            onClick={() => router.push("rice-dish")}
          >
            <Image
              src="/images/gohanmono.png"
              alt="rice-dish"
              objectFit="contain"
            />
          </Flex>
        </Flex>
        <Flex
          cursor="pointer"
          _hover={{
            opacity: "60%",
            transform: "scale(1.1)",
          }}
          onClick={() => router.push("wagyuu")}
        >
          <Image
            src="/images/japancow.png"
            alt="japancow"
            objectFit="contain"
          />
        </Flex>
        <Flex flexDir="column" justifyContent="space-between">
          <Flex
            cursor="pointer"
            _hover={{
              opacity: "60%",
              transform: "scale(1.1)",
            }}
            onClick={() => router.push("appetizer")}
          >
            <Image src="/images/side.png" alt="side" objectFit="contain" />
          </Flex>
          <Flex
            cursor="pointer"
            _hover={{
              opacity: "60%",
              transform: "scale(1.1)",
            }}
            onClick={() => router.push("drink")}
          >
            <Image src="/images/drink.png" alt="drink" objectFit="contain" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Menu;

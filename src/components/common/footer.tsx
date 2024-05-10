import {
  Box,
  Link,
  Divider,
  Flex,
  Text,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
interface Menu {
  name: string;
}
interface FooterProps {
  pageName: string;
}
function Footer({ pageName }: FooterProps) {
  const menu: Menu[] = [
    { name: "ホーム" },
    { name: "和牛肉" },
    { name: "焼き物" },
    { name: "前菜・一品料理" },
    { name: "ご飯物" },
    { name: "ドリンク" },
  ];
  function renderMenu(name: string): string {
    switch (name) {
      case "和牛肉":
        return "wagyuu";
      case "焼き物":
        return "yakimono";
      case "前菜・一品料理":
        return "appetizer";
      case "ご飯物":
        return "rice-dish";
      case "ドリンク":
        return "drink";
      default:
        return "/";
    }
  }
  return (
    <Box
      bgColor="rgba(0,0,0,0.8)"
      color="#ffffff"
      fontSize={{ base: "16px", lg: "26px" }}
      w="100%"
      display="flex"
      justifyContent="center"
    >
      <Flex
        w={{ base: "100%", mid: "85%" }}
        flexDir="column"
        alignItems="center"
      >
        <Flex flexDirection={"column"} w="100%" alignItems="center">
          <HStack
            w="100%"
            spacing={8}
            lineHeight={{ base: "", lg: "60px" }}
            wrap="wrap"
            justifyContent="center"
            maxW={{ base: "345px", md: "100%" }}
            margin={{ base: "20px 0", mid: "none" }}
          >
            {menu.map((item, index) => (
              <>
                <Link
                  href={renderMenu(item.name)}
                  key={index}
                  fontWeight="bold"
                  fontSize={"18px"}
                  _hover={{ textDecoration: "none", color: "orange" }}
                  color={item.name === pageName ? "orange" : ""}
                >
                  {item.name}
                </Link>
                <Box
                  display={{ base: "none", mid: "block" }}
                  w="2px"
                  h="20px"
                  bgColor="#FFFFFF"
                />
              </>
            ))}
            <Link
              href={"guide"}
              fontWeight="bold"
              fontSize={"18px"}
              _hover={{ textDecoration: "none", color: "orange" }}
              color={pageName === "店舗案内" ? "orange" : ""}
            >
              店舗案内
            </Link>
          </HStack>
        </Flex>

        <Divider w={"100%"} margin="auto" />
        <Box textAlign="center" mt="20px">
          <Link
            target="_blank"
            href="https://www.facebook.com/denguriyama/?locale=ja_JP"
          >
            <Icon as={FaFacebook} fontSize="30px" cursor="pointer" />
          </Link>
        </Box>
        <Box
          maxW={{ base: "270px", lg: "none" }}
          textAlign="center"
          padding={"20px"}
        >
          <Text fontSize={16} textAlign="center" mb="20px">
            住所： 〒332-0002 埼玉県川口市弥平1ー7ー３　２F
            <br />
            電話番号：048-431-1027
          </Text>
          <Text fontSize={16} color="secondary.50">
            Coppyright ©︎2024 by DENGURIYAMA. All rights resered
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
export default Footer;

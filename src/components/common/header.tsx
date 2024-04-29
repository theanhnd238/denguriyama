import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";

interface Menu {
  name: string;
}
interface HeaderProps {
  pageName: string;
}

function Header({ pageName }: HeaderProps) {
  const router = useRouter();

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
    <Flex
      w="100%"
      h="60px"
      bgColor="rgba(0, 0, 0, 0.5)"
      justifyContent="space-between"
      alignItems="center"
      color="#ffffff"
      p="0 50px"
      position="absolute"
      top="0"
      left="0"
    >
      <Flex
        h="80px"
        alignItems="center"
        cursor="pointer"
        onClick={() => router.push("/")}
      >
        <Image h="70%" alt="logo" src="/images/logo.png" />
      </Flex>
      <HStack spacing="20px">
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
            <Box w="2px" h="30px" bgColor="#FFFFFF" />
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
      <Flex alignItems="center" onClick={() => window.open("tel:0484311027")}>
        <FaPhoneVolume fontSize="20px" />
        <Text ml="10px" fontSize="20px" fontWeight="bold">
          048−431−1027
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;

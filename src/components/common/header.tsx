import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { FaPhoneVolume } from "react-icons/fa6";
import React, { useRef } from "react";

interface Menu {
  name: string;
}
interface HeaderProps {
  pageName: string;
}

function Header({ pageName }: HeaderProps) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);
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
      h={{ base: "40px", md: "60px" }}
      bgColor="rgba(0, 0, 0, 0.8)"
      justifyContent="space-between"
      alignItems="center"
      color="#ffffff"
      p={{ base: "0 10px", md: "0 50px" }}
      position="absolute"
      top="0"
      left="0"
    >
      <Flex
        h={{ base: "40px", md: "80px" }}
        alignItems="center"
        cursor="pointer"
        onClick={() => router.push("/")}
      >
        <Image h="80%" alt="logo" src="/images/logo.png" />
      </Flex>
      <IconButton
        isRound={true}
        size="sm"
        aria-label="Menu bar"
        icon={<MdMenu color="accent.600" fontSize={"24px"} />}
        display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        // ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p="0">
            <Flex
              w={"100%"}
              h={"100%"}
              flexDirection="column"
              align="center"
              letterSpacing="4px"
              pt="140px"
              gap="30px 0"
              bgGradient="linear-gradient(#f7f7e8 0%,#c7cfb7 100%)"
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
                    textAlign="center"
                  >
                    <Text>{item.name}</Text>
                  </Link>
                </>
              ))}
              <Link
                href={"guide"}
                fontWeight="bold"
                fontSize={"18px"}
                _hover={{ textDecoration: "none", color: "orange" }}
                color={pageName === "店舗案内" ? "orange" : ""}
                textAlign="center"
              >
                <Text> 店舗案内</Text>
              </Link>
              <Flex
                alignItems="center"
                onClick={() => window.open("tel:0484311027")}
              >
                <FaPhoneVolume fontSize="20px" />
                <Text ml="10px" fontSize="20px" fontWeight="bold">
                  048−431−1027
                </Text>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack spacing="20px" display={{ base: "none", mid: "flex" }}>
        {menu.map((item, index) => (
          <>
            <Link
              href={renderMenu(item.name)}
              key={index}
              fontWeight="bold"
              fontSize={"18px"}
              _hover={{ textDecoration: "none", color: "orange" }}
              color={item.name === pageName ? "orange" : ""}
              _focus={{ boxShadow: "none !important" }}
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
          _focus={{ boxShadow: "none !important" }}
        >
          店舗案内
        </Link>
      </HStack>
      <Link
        alignItems="center"
        href="tel:+81484311027"
        display={{ base: "none", mid: "flex" }}
      >
        <FaPhoneVolume fontSize="20px" />
        <Text ml="10px" fontSize="20px" fontWeight="bold">
          048−431−1027
        </Text>
      </Link>
    </Flex>
  );
}

export default Header;

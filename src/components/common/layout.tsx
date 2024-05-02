import { ReactNode, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";
import Footer from "./footer";
import Banner from "./banner";
interface LayoutProps {
  url?: string;
  pageName: string;
  children: ReactNode;
}

function Layout({
  pageName,
  children,
  url = "/images/banner.png",
}: LayoutProps) {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    function scrollTop() {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", scrollTop);

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Flex flexDir="column" alignItems="center">
      <Banner pageName={pageName} url={url} />
      {children}
      <Footer pageName={pageName} />
      {showButton && (
        <Box
          pos="fixed"
          zIndex={"999"}
          w={{ base: "45px", md: "60px", lg: "80px" }}
          h={{ base: "45px", md: "60px", lg: "80px" }}
          bottom="20px"
          right="20px"
          bgColor={"#fafafa"}
          borderRadius="100%"
          color={"#e53935"}
          border={`1px solid #e53935`}
          onClick={scrollToTop}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}
          gap={"4px 0"}
          fontSize={{ base: "12px", md: "16px", lg: "20px" }}
          cursor="pointer"
        >
          <FaChevronUp />
          TOP
        </Box>
      )}
    </Flex>
  );
}

export default Layout;

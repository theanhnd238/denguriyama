import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import YakimonoPageContent from "@/components/pageContents/yakimono";
import { Box } from "@chakra-ui/react";
import React from "react";

function JapanCowPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="焼き物" />
      <Box display="flex" justifyContent="center" w="100%">
        <YakimonoPageContent />
      </Box>
      <Footer pageName="焼き物" />
    </>
  );
}

export default JapanCowPage;

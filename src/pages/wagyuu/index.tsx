import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import JapanCowPageContent from "@/components/pageContents/japanCowPage";
import { Box } from "@chakra-ui/react";
import React from "react";

function JapanCowPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="和牛肉" />
      <Box display="flex" justifyContent="center" w="100%">
        <JapanCowPageContent />
      </Box>
      <Footer pageName="和牛肉" />
    </>
  );
}

export default JapanCowPage;

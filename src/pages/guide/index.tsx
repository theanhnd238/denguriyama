import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import GuidePageContent from "@/components/pageContents/guide";
import { Box } from "@chakra-ui/react";

function DrinkPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="店舗案内" />
      <Box display="flex" justifyContent="center" w="100%">
        <GuidePageContent />
      </Box>
      <Footer pageName="店舗案内" />
    </>
  );
}

export default DrinkPage;

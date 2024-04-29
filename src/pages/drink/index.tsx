import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import DrinkPageContent from "@/components/pageContents/drink";
import { Box } from "@chakra-ui/react";

function DrinkPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="ドリンク" />
      <Box display="flex" justifyContent="center" w="100%">
        <DrinkPageContent />
      </Box>
      <Footer pageName="ドリンク" />
    </>
  );
}

export default DrinkPage;

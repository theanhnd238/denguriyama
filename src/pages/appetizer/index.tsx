import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import AppetizerPageContent from "@/components/pageContents/appetizerPage";
import { Box } from "@chakra-ui/react";

function AppetizerPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="前菜・一品料理" />
      <Box display="flex" justifyContent="center" w="100%">
        <AppetizerPageContent />
      </Box>
      <Footer pageName="前菜・一品料理" />
    </>
  );
}

export default AppetizerPage;

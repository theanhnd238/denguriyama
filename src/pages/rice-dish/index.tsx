import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import RiceDishPageContent from "@/components/pageContents/riceDishPage";
import { Box } from "@chakra-ui/react";

function AppetizerPage() {
  return (
    <>
      <Banner url="/images/banner.png" pageName="ご飯物" />
      <Box display="flex" justifyContent="center" w="100%">
        <RiceDishPageContent />
      </Box>
      <Footer pageName="ご飯物" />
    </>
  );
}

export default AppetizerPage;

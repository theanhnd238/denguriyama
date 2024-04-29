import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import HomePageContent from "@/components/pageContents/homePage";
import { Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box>
      <Banner url="/images/banner.png" pageName="ホーム" />
      <Box display="flex" justifyContent="center" w="100%">
        <HomePageContent />
      </Box>
      <Footer pageName="ホーム" />
    </Box>
  );
}

export default HomePage;

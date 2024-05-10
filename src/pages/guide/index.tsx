import Banner from "@/components/common/banner";
import Footer from "@/components/common/footer";
import Layout from "@/components/common/layout";
import GuidePageContent from "@/components/pageContents/guide";
import { Box } from "@chakra-ui/react";

function DrinkPage() {
  return (
    <Layout pageName="店舗案内">
      <GuidePageContent />
    </Layout>
  );
}

export default DrinkPage;

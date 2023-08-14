import BrandAbout from "@/components/Brand/BrandAbout";
import BrandNavbar from "@/components/Brand/BrandNavbar";
import Insights from "@/components/Brand/Insight/Insight";
import BrandStarted from "@/components/Brand/Start/BrandStarted";
import BrandExplore from "@/components/Brand/Explore/BrandExplore";

function BrandPage() {
  return (
    <div>
      <BrandNavbar />
      <BrandAbout />
      <BrandExplore />
      <BrandStarted />
      <Insights />
    </div>
  );
}

export default BrandPage;

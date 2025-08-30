import { Helmet } from "react-helmet-async"
import HeroSection from "../../components/HeroSection/HeroSection"
import HeroSection2 from "../../components/HeroSection/HeroSection2"
import HeroSection3 from "../../components/HeroSection/HeroSection3"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RBG HR Services LLP | Insurance Hiring Specialists Since 2014</title>
        <meta
  name="description"
  content="India’s leading insurance recruitment partner since
2014. RBG HR Services LLP specializes in frontline, mid-level, senior,
and leadership hiring with pan-India reach."
/>;
      </Helmet>
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
    </div>
  )
}

export default Home

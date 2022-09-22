import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";

import Favorites from "../../components/Favorites/Favorites";
import BarLounge from "../../components/BarLounge/BarLounge";
import MainDivider from "../../components/MainDivider/MainDivider";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";

function Homepage({ scrollTo, scrollRef }) {
  return (
    <>
      <Hero scrollTo={scrollTo} />
      <Intro refProp={scrollRef} />
      <Favorites />
      <BarLounge />
      <MainDivider />
      <ReviewCarousel />
    </>
  );
}

export default Homepage;

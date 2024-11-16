import Features from "../components/Features";
import FeaturesSecond from "../components/FeaturesSecond";
import Hero from "../components/Hero";
import NewItems from "../components/NewItems";
import NewsLetters from "../components/NewsLetters";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Testimonial />
      <NewsLetters />
    </div>
  );
}

export default Home;

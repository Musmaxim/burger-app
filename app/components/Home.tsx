import Delivery from "./Delivery/Delivery";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import PopularBurger from "./PopuplarBurger/PopularBurger";
import Reservation from "./Reservation/Reservation";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
    </div>
  );
};

export default Home;

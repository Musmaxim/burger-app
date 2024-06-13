"use client";

import { useEffect } from "react";
import Delivery from "./Delivery/Delivery";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import PopularBurger from "./PopuplarBurger/PopularBurger";
import Reservation from "./Reservation/Reservation";
import Team from "./Team/Team";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async ()  =>  {
      await  import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement:  "top-center",
      });
    }
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
    </div>
  );
};

export default Home;

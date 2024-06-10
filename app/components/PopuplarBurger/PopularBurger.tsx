"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1600, min: 900 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Наши популярные <span className="text-red-600">предложения</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          centerMode={true}
        >
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b1.png"
            price="450"
            review="3"
          />
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b2.png"
            price="450"
            review="3"
          />
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b3.png"
            price="450"
            review="3"
          />
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b4.png"
            price="450"
            review="3"
          />
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b5.png"
            price="450"
            review="3"
          />
          <BurgerCard
            title="Говяжий вупсень"
            image="/images/b6.png"
            price="450"
            review="3"
          />
                    <BurgerCard
            title="Говяжий вупсень"
            image="/images/b7.png"
            price="450"
            review="3"
          />
                    <BurgerCard
            title="Говяжий вупсень"
            image="/images/b8.png"
            price="450"
            review="3"
          />
                    <BurgerCard
            title="Говяжий вупсень"
            image="/images/b9.png"
            price="450"
            review="3"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;

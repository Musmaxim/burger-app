import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import PopularBurger from "./PopuplarBurger/PopularBurger"

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <Features/>
        <PopularBurger/>
    </div>
  )
}

export default Home
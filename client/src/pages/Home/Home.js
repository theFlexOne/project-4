import "./home.css";
import BarbersSection from "./components/BarberSection/BarbersSection";
import Banner from "./components/Banner/Banner";
// import GallerySection from "./components/GallerySection/GallerySection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <BarbersSection />
      <ReviewsSection />
      <div>
        <br />
        <br />
        <p>location & contact info here</p>
        <br />
        <br />
      </div>
      {/* <div className="services-section"></div> */}
    </main>
  );
};

export default Home;

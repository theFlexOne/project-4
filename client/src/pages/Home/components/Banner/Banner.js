import LogoSVG from "../../LogoSVG";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <LogoSVG />
      <div className="welcome">
        <p className="welcome-header">Welcome!</p>
        <p className="welcome-message">
          Click below to book your appointment today!
        </p>
        <button
          className="book-appointment"
          onClick={(e) => console.log("yup")}
        >
          Book Appointment!
        </button>
      </div>
    </div>
  );
};

export default Banner;

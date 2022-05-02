import "./barbersSection.css";
import femalePlaceholder from "../../../../assets/images/female-placeholder.png";
import malePlaceholder from "../../../../assets/images/male-placeholder.png";

const pickRandomPlaceholder = () => {
  const flip = Math.random();
  return flip > 0.5 ? malePlaceholder : femalePlaceholder;
};

const BarbersSection = () => {
  const barbers = [
    { name: "barber1", img: pickRandomPlaceholder() },
    { name: "barber2", img: pickRandomPlaceholder() },
    { name: "barber3", img: pickRandomPlaceholder() },
  ];

  return (
    <div className="barbers-section">
      <h2>MEET THE CREW!</h2>
      <div className="barber-cards">
        {barbers.map((b, i) => (
          <div key={i} className="barber">
            <img src={b.img} alt={b.name} width="250" height="250" />
            <h3>{b.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarbersSection;

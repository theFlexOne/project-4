import "./barbersSection.css";
import b1 from "../../../../assets/images/stock-barber-1.jpg";
import b2 from "../../../../assets/images/stock-barber-2.jpg";
import b3 from "../../../../assets/images/stock-barber-3.jpg";
import b4 from "../../../../assets/images/stock-barber-4.jpg";

// const pickRandomPlaceholder = () => {
//   const flip = Math.random();
//   return flip > 0.5 ? malePlaceholder : femalePlaceholder;
// };

const BarbersSection = () => {
  const barbers = [
    { name: "Barber 1", img: b1 },
    { name: "Barber 2", img: b2 },
    { name: "Barber 3", img: b3 },
    { name: "Barber 4", img: b4 },
  ];

  return (
    <div className="barbers-section">
      <h2>MEET THE CREW!</h2>
      <div className="barbers">
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

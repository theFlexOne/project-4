import defaultProfileImage from "../../../../assets/images/barber-images/default_profile_image.png";
import bImg1 from "../../../../assets/images/barber-images/barber1.png";
import bImg2 from "../../../../assets/images/barber-images/barber2.png";
import bImg3 from "../../../../assets/images/barber-images/barber3.png";
import bImg4 from "../../../../assets/images/barber-images/barber4.png";
import bImg5 from "../../../../assets/images/barber-images/barber5.png";
import bImg6 from "../../../../assets/images/barber-images/barber6.png";

import "./barberStep.css";
import { useState } from "react";

const barberImages = [bImg1, bImg2, bImg3, bImg4, bImg5, bImg6];

const BarberStep = ({ barbers, selectedBarberId, updateBarber }) => {
  console.log(`selectedBarberId`, selectedBarberId);
  const BarberCard = (b, i) => {
    const handleBarberClick = () => {
      console.log(`barber`, b);
      if (selectedBarberId === b.id) return updateBarber(null);
      updateBarber(b.id);
    };
    return (
      <div
        key={b.id}
        className={`barber ${selectedBarberId === b.id ? "selected" : ""}`}
        onClick={handleBarberClick}
      >
        <img src={barberImages[i]} alt="profile" />
        <p className="name">{b.name}</p>
      </div>
    );
  };
  return (
    <div className="barbers-container">
      <h2>Pick your barber:</h2>
      <div className="barbers step-1">{barbers.map(BarberCard)}</div>
    </div>
  );
};

export default BarberStep;

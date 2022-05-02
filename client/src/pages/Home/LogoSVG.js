import { useLayoutEffect, useRef } from "react";
import { ReactComponent as PsbLogo } from "../../assets/images/psb-logo.svg";
import { ReactComponent as PsbText } from "../../assets/images/psb-text.svg";

const setupRotationAnimation = (ref) => {
  let rotationDeg = 360;
  const logoWrapper = ref.current;
  console.log(`logoWrapper`, logoWrapper);
  const scissors = logoWrapper.querySelector("#scissors");
  const circleStache = logoWrapper.querySelector("#circle-stache");
  logoWrapper.addEventListener("click", () => {
    scissors.style.transform = `rotate(${rotationDeg}deg)`;
    circleStache.style.transform = `rotate(-${rotationDeg}deg)`;
    rotationDeg += 360;
  });
};

const setupStacheWiggleAnimation = (ref) => {
  const logoWrapper = ref.current;
  const stache = logoWrapper.querySelector("#stache");
  stache.addEventListener("click", () => {
    stache.style.animation = "wiggle 1s";
  });
};

const LogoSVG = () => {
  const wrapperRef = useRef();
  useLayoutEffect(() => {
    // setupRotationAnimation(wrapperRef);
    setupStacheWiggleAnimation(wrapperRef);
  }, []);
  return (
    <div className="banner-logo-text">
      <span ref={wrapperRef} className="logo-wrapper">
        <PsbLogo className="logo" />
      </span>
      <PsbText className="text" />
    </div>
  );
};

export default LogoSVG;

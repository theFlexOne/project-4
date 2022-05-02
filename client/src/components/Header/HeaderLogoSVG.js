import { ReactComponent as PsbLogo } from "../../assets/images/psb-logo.svg";
import { ReactComponent as PsbText } from "../../assets/images/psb-text.svg";
import "./header.css";

const HeaderLogoSVG = () => {
  console.log(PsbLogo);
  console.log(PsbText);

  return (
    <div className="header-logo">
      <PsbLogo className="logo" height="50" width="50"></PsbLogo>
      <PsbText className="text" height="50" width="150"></PsbText>
    </div>
  );
};

export default HeaderLogoSVG;

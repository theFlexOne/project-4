import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-1">
        ** LOGO HERE ** <br />
        <span className="social-media-icons">
          <FacebookIcon />
          <TwitterIcon />
          <EmailIcon />
          <InstagramIcon />
        </span>
        Copyright © 2022 <br />
      </div>
    </div>
  );
};

export default Footer;

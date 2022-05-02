import HeaderLogoSVG from "./HeaderLogoSVG";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <header>
      <HeaderLogoSVG />
      <span className="links">
        <a href="#">BARBERS</a>
        <a href="#">SERVICES</a>
        <a href="#">SHOP</a>
        <a href="#">BOOK APPOINTMENT</a>
        <ShoppingCartOutlinedIcon fontSize="large" className="cart-icon" />
      </span>
    </header>
  );
};

export default Header;

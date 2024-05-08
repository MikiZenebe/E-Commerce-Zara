import {
  BtnContainer,
  Logo,
  Nav,
  NavContainer,
  NavItems,
  NavLogo,
  Navlink,
} from "../styles/Nav";
import Button from "./Button";

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <Logo />
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/shop">Shop</Navlink>
          <Navlink to="/newArrivals">New Arrivals</Navlink>
          <Navlink to="/orders">Orders</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        <BtnContainer>
          <Button text="SignIn" small />
        </BtnContainer>
      </NavContainer>
    </Nav>
  );
}

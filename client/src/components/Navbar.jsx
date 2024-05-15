/* eslint-disable react/prop-types */
import {
  BtnContainer,
  Logo,
  LogoText,
  MobileMenu,
  Mobileicon,
  Mobileicons,
  Nav,
  NavContainer,
  NavItems,
  NavLogo,
  Navlink,
  TextButton,
} from "../styles/Nav";
import Button from "./Button";
import LogoImg from "../assets/logo.png";
import {
  SearchRounded,
  FavoriteBorder,
  ShoppingCart,
  MenuRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Avatar } from "@mui/material";

export default function Navbar({ setOpenAuth, openAuth }) {
  const user = false;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Mobileicon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </Mobileicon>

        <NavLogo>
          <Logo src={LogoImg} />
          <LogoText>Jibruk</LogoText>
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/shop">Shop</Navlink>
          <Navlink to="/newArrivals">New Arrivals</Navlink>
          <Navlink to="/orders">Orders</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Shop">
              Shop
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/New_Arrivals">
              New Arrivals
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Orders">
              Orders
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Contact">
              Contact
            </Navlink>
            {user ? (
              <Button text="Logout" small />
            ) : (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
                <Button
                  text="Sign In"
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
              </div>
            )}
          </MobileMenu>
        )}

        <Mobileicons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {user ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={user?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                Miki
              </Avatar>
              <TextButton>Logout</TextButton>
            </>
          ) : (
            <Button
              text="SignIn"
              small
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </Mobileicons>

        <BtnContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/cart">
            <ShoppingCart sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Button text="SignIn" small onClick={() => setOpenAuth(!openAuth)} />
        </BtnContainer>
      </NavContainer>
    </Nav>
  );
}

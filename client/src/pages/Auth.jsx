import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  CloseButton,
  Container,
  Image,
  Left,
  Logo,
  Right,
  Text,
  TextButton,
} from "../styles/Auth";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.png";
import { useState } from "react";
import { SignIn, SignUp } from "../components";

export default function Auth({ openAuth, setOpenAuth }) {
  const [login, setLogin] = useState(false);

  return (
    <Modal open={openAuth} onClose={() => setOpenAuth(false)}>
      <Container>
        <Left>
          <Logo src={LogoImage} />
          <Image src={AuthImage} />
        </Left>
        <Right>
          <CloseButton>
            <Close onClick={() => setOpenAuth(false)} />
          </CloseButton>
          {login ? (
            <>
              <SignIn />
              <Text>
                Don't have an account?{" "}
                <TextButton onClick={() => setLogin(false)}>Sign Up</TextButton>
              </Text>
            </>
          ) : (
            <>
              <SignUp />
              <Text>
                Already have an account?{" "}
                <TextButton onClick={() => setLogin(true)}>Sign Up</TextButton>
              </Text>
            </>
          )}
        </Right>
      </Container>
    </Modal>
  );
}

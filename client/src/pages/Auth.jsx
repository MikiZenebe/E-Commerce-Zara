import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  CloseButton,
  Container,
  Image,
  Left,
  Logo,
  Right,
} from "../styles/Auth";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.png";

export default function Auth({ openAuth, setOpenAuth }) {
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
        </Right>
      </Container>
    </Modal>
  );
}

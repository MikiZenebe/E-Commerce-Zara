import {
  ButtonWrapper,
  Container,
  Desc,
  Details,
  Image,
  ImageWrapper,
  Item,
  Items,
  Name,
  Percent,
  Price,
  Sizes,
  Span,
  Title,
  Wrapper,
} from "../styles/ProductDetail";
import { Rating } from "@mui/material";
import Sample from "../assets/sample.jpg";
import Button from "../components/Button";
import { FavoriteRounded } from "@mui/icons-material";

export default function ProductDetails() {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={Sample} />
        </ImageWrapper>

        <Details>
          <div>
            <Title>Title</Title>
            <Name>Name</Name>
          </div>

          <Rating value={3.5} />

          <Price>
            $120 <Span>$200</Span>
            <Percent>40% off</Percent>
          </Price>

          <Desc>Product Desc</Desc>

          <Sizes>
            <Items>
              <Item selected>S</Item>
              <Item>L</Item>
              <Item>Xl</Item>
            </Items>
          </Sizes>

          <ButtonWrapper>
            <Button text="Add to Cart" full outlined />
            <Button text="Buy Now" full />
            <Button
              leftIcon={
                <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} full />
              }
            />
          </ButtonWrapper>
        </Details>
      </Wrapper>
    </Container>
  );
}

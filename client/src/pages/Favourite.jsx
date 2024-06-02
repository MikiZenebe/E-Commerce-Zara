import { ProductCard } from "../components";
import { CardWrapper, Container, Section, Title } from "../styles/Home";

export default function Favourite() {
  return (
    <Container>
      <Section>
        <Title center>Your favourites</Title>
        <CardWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardWrapper>
      </Section>
    </Container>
  );
}

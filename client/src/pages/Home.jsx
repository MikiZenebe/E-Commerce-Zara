import ProductCategory from "../components/cards/ProductCategory";
import { CardWrapper, Container, Img, Section, Title } from "../styles/Home";
import HeaderImage from "../utils/Images/Header.png";
import { category } from "../utils/data";

export default function Home() {
  return (
    <Container>
      <Section>
        <Img src={HeaderImage} />
      </Section>

      <Section>
        <Title>Shop by Categories</Title>
        <CardWrapper>
          {category.map((category, i) => {
            return <ProductCategory key={i} category={category} />;
          })}
        </CardWrapper>
      </Section>
      <Section>
        <Title center>Our Bestseller</Title>
      </Section>
    </Container>
  );
}

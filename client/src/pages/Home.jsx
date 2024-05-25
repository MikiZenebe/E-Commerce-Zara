import { useState } from "react";
import { ProductCategory, ProductCard } from "../components/index";
import { CardWrapper, Container, Img, Section, Title } from "../styles/Home";
import HeaderImage from "../utils/Images/Header.png";
import { category } from "../utils/data";

export default function Home() {
  const [products, setProducts] = useState([]);

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
        <CardWrapper>
          {/* {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))} */}
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

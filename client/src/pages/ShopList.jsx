import {
  CardWrapper,
  Container,
  FilterSection,
  Filters,
  Item,
  Menu,
  Products,
  SelectableItem,
  Title,
} from "../styles/ShopList";
import { ProductCard } from "../components/index";
import { filter } from "../utils/data";
import { Slider } from "@mui/material";

export default function ShopList() {
  return (
    <Container>
      <Filters>
        <Menu>
          {filter.map((filters, i) => {
            return (
              <FilterSection key={i}>
                <Title>{filters.name}</Title>
                {filters.value === "price" ? (
                  <>
                    <Slider />
                  </>
                ) : filters.value === "size" ? (
                  <>
                    <Item>
                      {filters.items.map((item, i) => (
                        <SelectableItem key={i}>{item}</SelectableItem>
                      ))}
                    </Item>
                  </>
                ) : filters.value === "category" ? (
                  <>
                    <Item>
                      {filters.items.map((item, i) => (
                        <SelectableItem key={i}>{item}</SelectableItem>
                      ))}
                    </Item>
                  </>
                ) : null}
              </FilterSection>
            );
          })}
        </Menu>
        <Products>
          <CardWrapper>
            <ProductCard />
          </CardWrapper>
        </Products>
      </Filters>
    </Container>
  );
}

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
import { category, filter } from "../utils/data";
import { Slider } from "@mui/material";
import { useState } from "react";

export default function ShopList() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L", "XL"]); // Default selected sizes
  const [selectedCategories, setSelectedCategories] = useState([
    "Men",
    "Women",
    "Kids",
    "Bags",
  ]); // Default selected categories

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
                    <Slider
                      aria-label="Price"
                      min={0}
                      max={1000}
                      defaultValue={priceRange}
                      valueLabelDisplay="auto"
                      marks={[
                        { value: 0, label: "$0" },
                        { value: 1000, label: "$1000" },
                      ]}
                      onChange={(e, newValue) => setPriceRange(newValue)}
                    />
                  </>
                ) : filters.value === "size" ? (
                  <>
                    <Item>
                      {filters.items.map((item, i) => (
                        <SelectableItem
                          key={i}
                          selected={selectedSizes.includes(item)}
                          onClick={() =>
                            setSelectedSizes((prevSizes) =>
                              prevSizes.includes(item)
                                ? prevSizes.filter(
                                    (category) => category !== item
                                  )
                                : [...prevSizes, item]
                            )
                          }
                        >
                          {item}
                        </SelectableItem>
                      ))}
                    </Item>
                  </>
                ) : filters.value === "category" ? (
                  <>
                    <Item>
                      {filters.items.map((item, i) => (
                        <SelectableItem
                          key={i}
                          selected={selectedCategories.includes(item)}
                          onClick={() =>
                            setSelectedCategories((prevCategories) =>
                              prevCategories.includes(item)
                                ? prevCategories.filter(
                                    (category) => category !== item
                                  )
                                : [...prevCategories, item]
                            )
                          }
                        >
                          {item}
                        </SelectableItem>
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

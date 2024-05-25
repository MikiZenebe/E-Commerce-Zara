import cardImage from "../utils/Images/item.png";
import cardImage2 from "../utils/Images/item2.png";
import cardImage3 from "../utils/Images/item3.png";

export const category = [
  {
    img: cardImage,
    name: "Casual Wear",
    off: "20-40% OFF",
  },
  {
    img: cardImage2,
    name: "Formal Wear",
    off: "10-20% OFF",
  },
  {
    img: cardImage3,
    name: "Winter Wear",
    off: "20-40% OFF",
  },
  {
    img: cardImage,
    name: "Western Wear",
    off: "30-40% OFF",
  },
  {
    img: cardImage2,
    name: "Ethnic Wear",
    off: "10-40% OFF",
  },
];

export const filter = [
  {
    name: "Product Categories",
    value: "category",
    items: [
      "Men",
      "Women",
      "Kids",
      "Bags",
      "Accessories",
      "Casual Wear",
      "Formal Wear",
      "Winter Wear",
      "Ethnic Wear",
    ],
  },
  {
    name: "Filter by Price",
    value: "price",
    items: [],
  },
  {
    name: "Filter by Size",
    value: "size",
    items: ["S", "M", "L", "XL", "XXL"],
  },
];

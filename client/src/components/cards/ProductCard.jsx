import { Rating } from "@mui/material";
import {
  Card,
  Desc,
  Details,
  Image,
  MenuItem,
  Percent,
  Price,
  ProdMenu,
  ProdTitle,
  ProdTop,
  Rate,
  Span,
} from "../../styles/Home";
import sampImg from "../../utils/Images/item.png";
import { AddShoppingCartOutlined, FavoriteRounded } from "@mui/icons-material";

export default function ProductCard() {
  return (
    <Card>
      <ProdTop>
        <Image src={sampImg} />
        <ProdMenu>
          <MenuItem>
            <FavoriteRounded sx={{ fontSize: "20px", color: "red" }} />
          </MenuItem>{" "}
          <MenuItem>
            <AddShoppingCartOutlined
              sx={{ color: "inherit", fontSize: "20px" }}
            />
          </MenuItem>
        </ProdMenu>
        <Rate>
          <Rating value={3.5} sx={{ fontSize: "14px" }} />
        </Rate>
      </ProdTop>

      <Details>
        <ProdTitle>Title</ProdTitle>
        <Desc>Desc</Desc>
        <Price>
          $1200 <Span>$1500</Span>
          <Percent>20% off</Percent>
        </Price>
      </Details>
    </Card>
  );
}

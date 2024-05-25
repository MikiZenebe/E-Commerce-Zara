/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button, Card, Image, Menu, Sale, Top } from "../../styles/Home";

export default function ProductCategory({ category }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/shop?category=${category.name}`)}>
      <Top>
        <Image src={category.img} alt="" />

        <Menu>
          <Button>{category.name}</Button>
        </Menu>

        <Sale>{category.off}</Sale>
      </Top>
    </Card>
  );
}

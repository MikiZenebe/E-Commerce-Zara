import {
  Counter,
  Delivery,
  Details,
  Img,
  Left,
  ProDesc,
  ProSize,
  Product,
  Protitle,
  Right,
  Subtotal,
  Table,
  TableItem,
  Wrapper,
} from "../styles/Cart";
import { Container, Section, Title } from "../styles/Home";
import Sample from "../assets/sample.jpg";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Cart() {
  return (
    <Container>
      <Section>
        <Title center>Your Shopping Cart</Title>

        <Wrapper>
          <Left>
            <Table>
              <TableItem bold flex>
                Product
              </TableItem>
              <TableItem bold>Price</TableItem>
              <TableItem bold>Quantity</TableItem>
              <TableItem bold>Subtotal</TableItem>
            </Table>

            <Table>
              <TableItem flex>
                <Product>
                  <Img src={Sample} />
                  <Details>
                    <Protitle>Title</Protitle>
                    <ProDesc>Desc</ProDesc>
                    <ProSize>Xl</ProSize>
                  </Details>
                </Product>
              </TableItem>
              <TableItem>$120</TableItem>
              <TableItem>
                <Counter>
                  <div>-</div> 2 <div>+</div>
                </Counter>
              </TableItem>
              <TableItem>$220</TableItem>
              <TableItem></TableItem>
            </Table>
          </Left>

          <Right>
            <Subtotal>Subtotal: 120.35</Subtotal>
            <Delivery>
              Delivery Details:{" "}
              <div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <TextInput small placeholder="First Name" />
                  <TextInput small placeholder="Last Name" />
                </div>

                <TextInput small placeholder="Email Address" />
                <TextInput small placeholder="Phone no. +251 XXX XXXXXX" />
                <TextInput
                  small
                  textArea
                  rows="5"
                  placeholder="Complete Address (Address, City, Region) "
                />
              </div>
            </Delivery>
            <Delivery>
              Payment Details:
              <div>
                <TextInput small placeholder="Card Number" />
                <div style={{ display: "flex", gap: "6px" }}>
                  <TextInput small placeholder="Expiry Date" />
                  <TextInput small placeholder="CVV" />
                </div>

                <TextInput small placeholder="Card Holder Name" />
              </div>
            </Delivery>
            <Button text="Pace Order" />
          </Right>
        </Wrapper>
      </Section>
    </Container>
  );
}

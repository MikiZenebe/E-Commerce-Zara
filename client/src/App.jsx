import styled from "styled-components";
import { Navbar } from "./components";
import { Auth, Favourite, Home, ShopList } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

export default function App() {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <Container>
      <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth} />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" exact element={<ShopList />} />
        <Route path="/favorite" exact element={<Favourite />} />
      </Routes>

      {openAuth && <Auth openAuth={openAuth} setOpenAuth={setOpenAuth} />}
    </Container>
  );
}

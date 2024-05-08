import styled from "styled-components";
import { Navbar } from "./components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

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
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Container>
  );
}

import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
export const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
export const Img = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  max-width: 1200px;
`;
export const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;

//Product Category
export const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 170px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 240px;
  }
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
  &:hover ${Image} {
    opacity: 0.8;
  }
`;

export const Menu = styled.div`
  width: 90%;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 20px;
  left: 50;
  right: 50;
  display: flex;
  gap: 12px;
`;
export const Button = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  @media (max-width: 600px) {
    padding: 6px 14px;
  }
`;
export const Sale = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: green;
  padding: 3px 6px;
  border-radius: 4px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

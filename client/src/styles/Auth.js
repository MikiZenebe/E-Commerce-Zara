import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;
export const Left = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Right = styled.div`
  position: relative;
  flex: 0.9;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
export const Logo = styled.img`
  left: 40px;
  top: 60px;
  z-index: 10;
`;
export const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 2px;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 30px;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
    overflow-y: scroll;
  }
  background: ${({ theme }) => theme.bg};
`;
export const Filters = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 16px;
  @media (min-width: 768px) {
    height: 100%;
    width: 300px;
    overflow-y: scroll;
  }
`;
export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Products = styled.div`
  padding: 12px;
  overflow: hidden;
  height: fit-content;
  @media (min-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
  }
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

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SelectableItem = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 16px;
  width: fit-content;
  ${({ selected }) =>
    selected &&
    `
  border: 1px solid black;
  color: white;
  background: black;
  font-weight: 500;
  `}

  &:hover {
    border: 1px solid black;
  }
`;

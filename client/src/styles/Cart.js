import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  width: 100%;
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 0.8;
  }
`;

export const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head }) => head && `margin-bottom:22px`}
`;
export const TableItem = styled.div`
  ${({ flex }) => flex && `flex:1;`}
  ${({ bold }) => bold && `font-weight:600; font-size:18px`}
`;
export const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;

export const Product = styled.div`
  display: flex;
  gap: 16px;
`;
export const Img = styled.img`
  height: 80px;
`;
export const Details = styled.div``;
export const Protitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;
export const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
export const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

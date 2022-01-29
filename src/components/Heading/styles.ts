import styled, { css } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  position: relative;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  z-index: 9999;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--black-color);
`;

const iconCSS = css`
  width: 40px;
  height: 40px;
  color: var(--grey-trash-icon);
  cursor: pointer;
`;

export const CartIcon =styled(FiShoppingCart)`
  ${iconCSS}
`

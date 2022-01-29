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
  position: fixed;
  width: 2rem;
  height: 2rem;
  z-index: 100;
  right: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--grey-trash-icon);
  cursor: pointer;
`;

export const CartIcon =styled(FiShoppingCart)`
  ${iconCSS}
`

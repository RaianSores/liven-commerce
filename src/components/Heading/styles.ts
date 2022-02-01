import styled, { css } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  background: var(--black-color);
`;

export const Content = styled.div`
  max-width: 1820px;
  margin: 0 auto;
  background: var(--black-color);
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const iconCSS = css`
  position: absolute;
  width: 2rem;
  height: 2rem;
  right: 4rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--grey-trash-icon);
  cursor: pointer;
`;

export const CartIcon = styled(FiShoppingCart)`
  ${iconCSS}
`;

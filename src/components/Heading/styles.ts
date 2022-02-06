import styled, { css } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { FaHome } from "react-icons/fa"

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
  gap: 3rem;
`;

const CartIconCSSC = css`
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

const HomeIconCSSC = css`
  width: 2rem;
  height: 2rem;
  top: 2rem;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  color: var(--grey-trash-icon);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--text-grey-mid);
    transition: 0.2s ease-in-out;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  ${CartIconCSSC}
`;

export const HomeIcon = styled(FaHome)`
  ${HomeIconCSSC}
`;

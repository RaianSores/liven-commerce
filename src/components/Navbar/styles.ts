import styled, { css } from "styled-components";
import { FiMenu } from 'react-icons/fi';

export const Nav = styled.div``;

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--grey-trash-icon);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--text-grey-mid);
    transition: 0.2s ease-in-out;
  }
`;

export const NavIcon = styled(FiMenu)`
  ${iconCSS}
`;
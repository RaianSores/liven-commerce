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
  cursor: pointer;
`;

export const NavIcon = styled(FiMenu)`
  ${iconCSS}
`;
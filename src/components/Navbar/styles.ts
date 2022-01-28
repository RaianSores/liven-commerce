import styled, { css } from "styled-components";
import { FiMenu } from 'react-icons/fi';

export const Nav = styled.div``;

const iconCSS = css`
  width: 40px;
  height: 40px;
  color: var(--grey-trash-icon);
  cursor: pointer;
`;

export const NavIcon = styled(FiMenu)`
  ${iconCSS}
`;
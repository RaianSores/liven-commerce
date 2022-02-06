import styled, { css } from "styled-components";

import { FaTimes } from "react-icons/fa";

type IMenu = { isOpen?: boolean };

export const Container = styled.aside<IMenu>`
  position: fixed;
  width: 350px;
  height: 100%;
  background: var(--black-color);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "0" : "-1420px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  color: var(--grey-trash-icon);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--text-grey-mid);
    transition: 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled(FaTimes)`
  ${iconCSS}
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--grey-trash-icon);
  cursor: pointer;

  &:hover {
    color: var(--text-grey-mid);
    transition: 0.2s ease-in-out;
  }
`;

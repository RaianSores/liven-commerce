import styled, { css } from "styled-components";

import { FaTimes } from 'react-icons/fa';

type IMenu = { isOpen?: boolean };

export const Container = styled.aside<IMenu>`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: var(--black-color);
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.5s ease-in-out;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1420px')};
    
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const iconCSS = css`
    width: 30px;
    height: 30px;
    color: var(--grey-trash-icon);;
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
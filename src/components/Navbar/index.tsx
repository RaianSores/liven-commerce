import React from 'react';
import { Nav, NavIcon } from "./styles";


interface NavbarProps {
    toggle: () => void;
}

export const Navbar = (props: NavbarProps) => {
    return (
        <>
            <Nav>
                <NavIcon onClick={props.toggle} />
            </Nav>
        </>
    )
}
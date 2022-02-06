import React from 'react';
import { Link } from 'react-router-dom';
import { ISidebar } from '../../types/types';
import { Container, Icon, CloseIcon, SidebarLink } from './styles';

export const Sidebar = ({ isOpen, toggle }: ISidebar) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarLink>
                <Link to="/cart">Carrinho</Link>
            </SidebarLink>
        </Container>
    );
};

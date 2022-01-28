import React from 'react';
import { Container, Icon, CloseIcon } from './styles';

interface ISidebar {
    isOpen: boolean;
    toggle: () => void;
}

export const Sidebar = ({ isOpen, toggle }: ISidebar) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        </Container>
    );
};

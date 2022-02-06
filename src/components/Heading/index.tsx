import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { CartIcon, Container, Content, HomeIcon } from './styles';

export const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Link to="/cart">
          <CartIcon />
        </Link>
      </Content>
    </Container>
  );
};

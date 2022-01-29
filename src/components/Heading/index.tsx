import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { CartIcon, Container, Header } from './styles';


export const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <Container>
          <Header>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
          <CartIcon/>
          </Header>
      </Container>
  );
};

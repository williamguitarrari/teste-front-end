import React from 'react';

import { Container, Cart, Badge, Logo } from './styles';

import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Corebiz" />
      </Logo>

      <Cart to="/cart">
        <div>
          <img src={carrinho} alt="Cart" />
          <Badge>
            <span>3</span>
          </Badge>
        </div>
      </Cart>
    </Container>
  );
}

export default Header;
'use client';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  color: #333;
  height: 60px;
  line-height: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  right: 50px;

  svg {
    color: #333;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #f00;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <h1>Vrit Store</h1>
      </Logo>
      <CartIconContainer>
        <FaShoppingCart size={24} />
        <CartCount>0</CartCount>
      </CartIconContainer>
    </NavbarContainer>
  );
};

export default Navbar;

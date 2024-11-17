'use client';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Vrit Store</h1>
      </div>
      <div className={styles.cartIconContainer}>
        <FaShoppingCart size={24} />
        <span className={styles.cartCount}>0</span>{' '}
        {/* Example cart item count */}
      </div>
    </div>
  );
};

export default Navbar;

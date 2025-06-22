import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #667eea;
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &.active {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &.active {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  align-self: flex-end;
  padding: 0.5rem;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoIcon>SL</LogoIcon>
          Sign Translate
        </Logo>

        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/translate" className={location.pathname === '/translate' ? 'active' : ''}>
            Translate
          </NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <FiMenu />
        </MobileMenuButton>
      </Nav>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          exit={{ x: 250 }}
          transition={{ type: 'tween' }}
        >
          <CloseButton onClick={closeMobileMenu}>
            <FiX />
          </CloseButton>
          <MobileNavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            to="/translate" 
            className={location.pathname === '/translate' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Translate
          </MobileNavLink>
          <MobileNavLink 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            About
          </MobileNavLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header; 
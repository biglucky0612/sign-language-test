import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled.p`
  color: #666;
  margin: 0;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const FooterLink = styled(motion.a)`
  color: #666;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #667eea;
  }
`;

const HeartIcon = styled(FiHeart)`
  color: #ef4444;
  animation: pulse 2s infinite;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Made with <HeartIcon /> by the Sign Language Translate team
        </FooterText>
        
        <FooterLinks>
          <FooterLink
            href="https://github.com/sign/translate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
            GitHub
          </FooterLink>
          
          <FooterLink
            href="https://sign.mt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink />
            sign.mt
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 
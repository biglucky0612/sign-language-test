import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 4px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  border-top-color: #667eea;
  animation: ${spin} 1s ease-in-out infinite;
  margin-bottom: ${props => props.showText ? '1rem' : '0'};
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const LoadingSpinner = ({ 
  size = '40px', 
  text = 'Loading...', 
  showText = true,
  className 
}) => {
  return (
    <SpinnerContainer className={className}>
      <Spinner size={size} showText={showText} />
      {showText && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 
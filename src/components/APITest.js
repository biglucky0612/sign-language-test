import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiWifi, FiWifiOff, FiActivity } from 'react-icons/fi';
import { apiUtils } from '../services/api';
import toast from 'react-hot-toast';

const TestContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TestButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.connected ? '#4ade80' : '#ef4444'};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const StatusText = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const APITest = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const testConnection = async () => {
    setIsTesting(true);
    try {
      const connected = await apiUtils.testSignMTConnection();
      setIsConnected(connected);
      if (connected) {
        toast.success('Successfully connected to sign.mt API!');
      } else {
        toast.error('Failed to connect to sign.mt API');
      }
    } catch (error) {
      setIsConnected(false);
      toast.error('Connection test failed');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <TestContainer>
      <TestButton
        onClick={testConnection}
        disabled={isTesting}
        connected={isConnected}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isTesting ? (
          <>
            <FiActivity />
            Testing...
          </>
        ) : isConnected === null ? (
          <>
            <FiActivity />
            Test API Connection
          </>
        ) : isConnected ? (
          <>
            <FiWifi />
            Connected
          </>
        ) : (
          <>
            <FiWifiOff />
            Disconnected
          </>
        )}
      </TestButton>
      <StatusText>
        {isConnected === null && 'Click to test connection to sign.mt API'}
        {isConnected === true && 'Successfully connected to sign.mt API'}
        {isConnected === false && 'Failed to connect to sign.mt API'}
      </StatusText>
    </TestContainer>
  );
};

export default APITest; 
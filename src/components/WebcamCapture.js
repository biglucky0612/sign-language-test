import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Webcam from 'react-webcam';
import { FiCamera, FiX } from 'react-icons/fi';

const WebcamContainer = styled.div`
  margin: 1rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const WebcamVideo = styled(Webcam)`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
`;

const WebcamControls = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
`;

const ControlButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const WebcamCapture = ({ onCapture, onClose }) => {
  const webcamRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const captureImage = () => {
    if (webcamRef.current) {
      setIsCapturing(true);
      const imageSrc = webcamRef.current.getScreenshot();
      
      // Simulate processing delay
      setTimeout(() => {
        if (onCapture) {
          onCapture(imageSrc);
        }
        setIsCapturing(false);
      }, 1000);
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  return (
    <WebcamContainer>
      <CloseButton
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </CloseButton>
      
      <WebcamVideo
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        width="100%"
      />
      
      <WebcamControls>
        <ControlButton
          onClick={captureImage}
          disabled={isCapturing}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiCamera />
        </ControlButton>
      </WebcamControls>
    </WebcamContainer>
  );
};

export default WebcamCapture; 
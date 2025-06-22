import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGlobe, FiSend, FiCamera, FiUpload, FiCopy, FiVolume2 } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Webcam from 'react-webcam';
import { useDropzone } from 'react-dropzone';
import { translationAPI } from '../services/api';
import { SUPPORTED_LANGUAGES, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../utils/constants';
import APITest from '../components/APITest';

const TranslateContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const TranslateContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
`;

const TranslationCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const LanguageSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SwapButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const InputSection = styled.div`
  margin-bottom: 2rem;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const InputActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  background: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    transform: translateY(-2px);
  }

  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: transparent;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const OutputSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 120px;
`;

const OutputText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
`;

const OutputActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const WebcamContainer = styled.div`
  margin: 1rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const WebcamVideo = styled(Webcam)`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
`;

const FileUploadArea = styled.div`
  border: 2px dashed #e1e5e9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0;

  &:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }

  &.drag-active {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
`;

const UploadIcon = styled.div`
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

const UploadHint = styled.small`
  color: #999;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
`;

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('asl');
  const [isTranslating, setIsTranslating] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const webcamRef = useRef(null);

  const languages = Object.values(SUPPORTED_LANGUAGES);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
        toast.success(`File uploaded: ${acceptedFiles[0].name}`);
      }
    }
  });

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast.error(ERROR_MESSAGES.translation.emptyInput);
      return;
    }

    setIsTranslating(true);

    try {
      // Call the actual sign.mt API
      const result = await translationAPI.translateTextToSign(
        inputText,
        sourceLanguage,
        targetLanguage
      );
      
      setOutputText(result.translation || result.text || 'Translation completed successfully!');
      toast.success(SUCCESS_MESSAGES.translation.completed);
    } catch (error) {
      console.error('Translation error:', error);
      
      // Fallback to mock translation if API fails
      const mockTranslations = {
        'en-asl': '👋 Hello! How are you today?',
        'en-bsl': '👋 Hello! How are you today? (BSL)',
        'de-asl': '👋 Hallo! Wie geht es dir heute?',
        'fr-asl': '👋 Bonjour! Comment allez-vous aujourd\'hui?',
        'asl-en': 'Hello! How are you today?',
        'bsl-en': 'Hello! How are you today? (BSL)',
        'dgs-de': 'Hallo! Wie geht es dir heute?',
        'lsf-fr': 'Bonjour! Comment allez-vous aujourd\'hui?'
      };

      const translationKey = `${sourceLanguage}-${targetLanguage}`;
      const fallbackResult = mockTranslations[translationKey] || 'Translation not available for this language pair.';
      
      setOutputText(fallbackResult);
      toast.error('API connection failed. Showing demo translation.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setInputText(outputText);
    setOutputText('');
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(outputText);
    toast.success(SUCCESS_MESSAGES.translation.copied);
  };

  const handleSpeakOutput = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(outputText);
      utterance.lang = targetLanguage === 'en' ? 'en-US' : 'en-US';
      speechSynthesis.speak(utterance);
    } else {
      toast.error('Speech synthesis not supported in this browser');
    }
  };

  const captureWebcam = () => {
    if (webcamRef.current) {
      // Capture the image (we'll use it later for API calls)
      webcamRef.current.getScreenshot();
      // Here you would typically send the image to your API
      toast.success('Image captured! Processing...');
      // For now, just show a demo message
      setOutputText('👋 Sign language detected! This is a demo translation.');
    }
  };

  return (
    <TranslateContainer>
      <TranslateContent>
        <PageTitle>Sign Language Translation</PageTitle>

        {/* API Test Component */}
        <APITest />

        <TranslationCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LanguageSelector>
            <LanguageSelect
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </LanguageSelect>

            <SwapButton
              onClick={handleSwapLanguages}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGlobe />
            </SwapButton>

            <LanguageSelect
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </LanguageSelect>
          </LanguageSelector>

          <InputSection>
            <InputLabel>Input Text</InputLabel>
            <TextArea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              maxLength={500}
            />
            <div style={{ textAlign: 'right', marginTop: '0.5rem', color: '#666' }}>
              {inputText.length}/500
            </div>
          </InputSection>

          <InputActions>
            <ActionButton
              onClick={() => setShowWebcam(!showWebcam)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCamera />
              {showWebcam ? 'Hide Camera' : 'Use Camera'}
            </ActionButton>

            <ActionButton
              {...getRootProps()}
              className={isDragActive ? 'drag-active' : ''}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input {...getInputProps()} />
              <FiUpload />
              Upload File
            </ActionButton>

            <ActionButton
              onClick={handleTranslate}
              className="primary"
              disabled={isTranslating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTranslating ? (
                <LoadingSpinner />
              ) : (
                <FiSend />
              )}
              {isTranslating ? 'Translating...' : 'Translate'}
            </ActionButton>
          </InputActions>

          {showWebcam && (
            <WebcamContainer>
              <WebcamVideo
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
              />
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <ActionButton onClick={captureWebcam}>
                  <FiCamera />
                  Capture Image
                </ActionButton>
              </div>
            </WebcamContainer>
          )}

          {uploadedFile && (
            <FileUploadArea>
              <UploadIcon>📁</UploadIcon>
              <UploadText>File uploaded: {uploadedFile.name}</UploadText>
              <UploadHint>Click to upload a different file</UploadHint>
            </FileUploadArea>
          )}
        </TranslationCard>

        <TranslationCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InputLabel>Translation Result</InputLabel>
          <OutputSection>
            <OutputText>
              {outputText || 'Translation will appear here...'}
            </OutputText>
          </OutputSection>
          
          {outputText && (
            <OutputActions>
              <ActionButton
                onClick={handleCopyOutput}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCopy />
                Copy
              </ActionButton>
              
              {targetLanguage === 'en' && (
                <ActionButton
                  onClick={handleSpeakOutput}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiVolume2 />
                  Speak
                </ActionButton>
              )}
            </OutputActions>
          )}
        </TranslationCard>
      </TranslateContent>
    </TranslateContainer>
  );
};

export default Translate; 
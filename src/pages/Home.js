import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGlobe, FiCamera, FiMic, FiUsers, FiZap, FiShield } from 'react-icons/fi';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const HowItWorksSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
`;

const StepsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Step = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Home = () => {
  const features = [
    {
      icon: <FiGlobe />,
      title: 'Multi-Language Support',
      description: 'Translate between multiple sign languages and spoken languages with ease.'
    },
    {
      icon: <FiCamera />,
      title: 'Real-Time Video Translation',
      description: 'Upload videos or use your camera for instant sign language translation.'
    },
    {
      icon: <FiMic />,
      title: 'Audio Input Support',
      description: 'Convert spoken language to sign language with our advanced audio processing.'
    },
    {
      icon: <FiUsers />,
      title: 'Accessible Communication',
      description: 'Bridge the communication gap between deaf and hearing communities.'
    },
    {
      icon: <FiZap />,
      title: 'Fast & Accurate',
      description: 'Powered by cutting-edge AI models for quick and precise translations.'
    },
    {
      icon: <FiShield />,
      title: 'Privacy First',
      description: 'Your data is processed securely with privacy protection measures.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Input Your Content',
      description: 'Upload a video, use your camera, or type text to get started with translation.'
    },
    {
      number: '2',
      title: 'AI Processing',
      description: 'Our advanced AI models analyze and process your content for accurate translation.'
    },
    {
      number: '3',
      title: 'Get Results',
      description: 'Receive instant translations in your preferred format - text, video, or audio.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Effortless Real-Time Sign Language Translation
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Break down communication barriers with cutting-edge AI technology. 
            Translate between sign languages and spoken languages instantly.
          </HeroSubtitle>
          <CTAButton
            to="/translate"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Translating Now
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <div className="container">
          <SectionTitle>Key Features</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      <HowItWorksSection>
        <div className="container">
          <SectionTitle>How It Works</SectionTitle>
          <StepsContainer>
            {steps.map((step, index) => (
              <Step
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </Step>
            ))}
          </StepsContainer>
        </div>
      </HowItWorksSection>
    </HomeContainer>
  );
};

export default Home; 
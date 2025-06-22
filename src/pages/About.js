import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUsers, FiCode, FiHeart } from 'react-icons/fi';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const AboutContent = styled.div`
  max-width: 1000px;
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

const Section = styled(motion.section)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionContent = styled.div`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓';
    color: #4ade80;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    color: white;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const TeamMember = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const MemberAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Citation = styled.blockquote`
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #666;
`;

const About = () => {
  const teamMembers = [
    {
      name: 'Amit Moryossef',
      role: 'Lead Developer & Researcher',
      avatar: 'AM'
    },
    {
      name: 'TimRB',
      role: 'Contributor',
      avatar: 'TR'
    }
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <PageTitle>About Sign Language Translate</PageTitle>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <FiHeart />
            Our Mission
          </SectionTitle>
          <SectionContent>
            <p>
              Sign Language Translate is an open-source project dedicated to breaking down communication barriers 
              between deaf and hearing communities through cutting-edge AI technology. Our mission is to provide 
              effortless, real-time sign language translation that is accessible to everyone.
            </p>
            <p>
              We believe that communication is a fundamental human right, and our technology aims to make 
              sign language translation as natural and seamless as possible, fostering greater inclusion and 
              understanding across communities.
            </p>
          </SectionContent>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionTitle>
            <FiCode />
            Technology
          </SectionTitle>
          <SectionContent>
            <p>
              Our platform leverages state-of-the-art machine learning models and computer vision techniques 
              to provide accurate sign language translation. The system supports multiple sign languages and 
              spoken languages, making it a versatile tool for global communication.
            </p>
            
            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#333' }}>
              Key Technologies:
            </h3>
            <FeatureList>
              <FeatureItem>Real-time video processing and analysis</FeatureItem>
              <FeatureItem>Advanced pose estimation and hand tracking</FeatureItem>
              <FeatureItem>Natural language processing for text generation</FeatureItem>
              <FeatureItem>Multi-language support and localization</FeatureItem>
              <FeatureItem>Responsive web design for all devices</FeatureItem>
              <FeatureItem>Privacy-first data processing</FeatureItem>
            </FeatureList>
          </SectionContent>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle>
            <FiUsers />
            Team
          </SectionTitle>
          <SectionContent>
            <p>
              Our team consists of passionate developers, researchers, and accessibility advocates 
              working together to make sign language translation accessible to everyone.
            </p>
            
            <TeamGrid>
              {teamMembers.map((member, index) => (
                <TeamMember key={index}>
                  <MemberAvatar>{member.avatar}</MemberAvatar>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                </TeamMember>
              ))}
            </TeamGrid>
          </SectionContent>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SectionTitle>Research & Citation</SectionTitle>
          <SectionContent>
            <p>
              This project is based on research in sign language translation and computer vision. 
              If you use this work in your research, please cite:
            </p>
            
            <Citation>
              @misc&#123;moryossef2023signmt,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;title=&#123;sign.mt: Effortless Real-Time Sign Language Translation&#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;author=&#123;Moryossef, Amit&#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;howpublished=&#123;\url&#123;https://sign.mt/&#125;&#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;year=&#123;2023&#125;<br/>
              &#125;
            </Citation>
          </SectionContent>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionTitle>Get Involved</SectionTitle>
          <SectionContent>
            <p>
              We welcome contributions from the community! Whether you're a developer, researcher, 
              or simply passionate about accessibility, there are many ways to get involved.
            </p>
            
            <LinksContainer>
              <LinkButton
                href="https://github.com/sign/translate"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
                View on GitHub
              </LinkButton>
              
              <LinkButton
                href="https://sign.mt/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink />
                Visit sign.mt
              </LinkButton>
            </LinksContainer>
          </SectionContent>
        </Section>

        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SectionTitle>License</SectionTitle>
          <SectionContent>
            <p>
              This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 
              International License (CC BY-NC-SA 4.0). This means you can use, modify, and distribute the 
              code for non-commercial purposes, as long as you give appropriate credit and share your 
              modifications under the same license.
            </p>
            <p>
              For commercial use, please contact the project maintainers for licensing options.
            </p>
          </SectionContent>
        </Section>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 
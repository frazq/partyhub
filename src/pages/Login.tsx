// src/pages/Login.tsx
import { TextInput, PasswordInput, Button, Box, Title, Flex } from '@mantine/core';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useState } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const inputStyles = {
    input: {
      background: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(255, 0, 0, 0.2)',
      borderRadius: 0,
      color: 'white',
      padding: '15px 20px 15px 20px',
      fontSize: '16px',
      height: '50px',
      width: '100%',
      transition: 'all 0.3s ease',
      '&:focus': {
        border: '1px solid rgba(255, 0, 0, 0.5)',
        boxShadow: '0 0 10px rgba(255, 0, 0, 0.2)'
      }
    }
  };

  const buttonBaseStyles = {
    border: 'none',
    borderRadius: 0,
    padding: '10px 30px',
    height: 45,
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
  };

  return (
    <Box style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      <Box
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}
      >
        <Box
          style={{
            width: '100%',
            maxWidth: 450,
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(30, 30, 30, 0.9))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 0, 0, 0.1)',
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)',
            position: 'relative',
          }}
        >
          <Box 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
            }}
          />
          
          <Title 
            order={1} 
            ta="center" 
            mb={50}
            style={{ 
              color: '#FF0000',
              fontSize: '3.5rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontFamily: '"Orbitron", sans-serif',
              textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            }}
          >
            partyhub
          </Title>

          <Box style={{ width: '100%' }}>
            <TextInput
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              mb={25}
              styles={inputStyles}
            />

            <Box style={{ width: '100%' }}>
            <PasswordInput
              placeholder="Hasło"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              mb={40}
              styles={{
                ...inputStyles,
                innerInput: {
                  color: 'white',
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  width: '100%',
                  paddingRight: '45px'
                },
                visibilityToggle: {
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  opacity: 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }
              }}
              
            />
            </Box>
          </Box>

          <Flex justify="space-between" align="center">
            <Button 
              style={{
                ...buttonBaseStyles,
                background: 'rgba(255, 0, 0, 0.2)',
                color: '#FF4444',
                '&:hover': {
                  background: 'rgba(255, 0, 0, 0.3)',
                  color: '#FF0000'
                }
              }}
            >
              ZAREJESTRUJ
            </Button>
            
            <Button 
              style={{
                ...buttonBaseStyles,
                background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF4444, #FF0000)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
                }
              }}
            >
              ZALOGUJ SIĘ
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
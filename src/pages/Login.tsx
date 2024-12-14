// src/pages/Login.tsx
import { TextInput, PasswordInput, Button, Box, Title, Flex, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Niepoprawny adres email').required('Email jest wymagany'),
  password: Yup.string().required('Hasło jest wymagane'),
});

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginForm>({
    validate: yupResolver(loginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (values: LoginForm) => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Błąd logowania');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas logowania');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    input: {
      background: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(255, 0, 0, 0.2)',
      borderRadius: 0,
      color: 'white',
      padding: '15px 20px',
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
          }}
        >
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
            PARTYHUB
          </Title>

          <form onSubmit={form.onSubmit(handleLogin)}>
            <TextInput
              required
              placeholder="Email"
              {...form.getInputProps('email')}
              mb={25}
              styles={inputStyles}
            />

            <PasswordInput
              required
              placeholder="Hasło"
              {...form.getInputProps('password')}
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
                  color: '#FF0000',
                  opacity: 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }
              }}
            />

            {error && (
              <Text color="red" mb={20} ta="center">
                {error}
              </Text>
            )}

            <Flex gap="md" justify="space-between">
              <Button
                variant="subtle"
                onClick={() => navigate('/register')}
                style={{
                  flex: 1,
                  color: '#FF4444',
                }}
                disabled={loading}
              >
                ZAREJESTRUJ
              </Button>

              <Button
                type="submit"
                style={{
                  flex: 1,
                  background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                  border: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF4444, #FF0000)',
                  }
                }}
                loading={loading}
              >
                ZALOGUJ SIĘ
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
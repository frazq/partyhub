// src/pages/Register.tsx
import { TextInput, PasswordInput, Button, Box, Title, Flex, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Niepoprawny adres email').required('Email jest wymagany'),
  password: Yup.string().min(6, 'Hasło musi mieć co najmniej 6 znaków').required('Hasło jest wymagane'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Hasła muszą być takie same')
    .required('Potwierdzenie hasła jest wymagane'),
  username: Yup.string().required('Nazwa użytkownika jest wymagana'),
});

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterForm>({
    validate: yupResolver(registerSchema),
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
  });

  const handleRegister = async (values: RegisterForm) => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/');
      } else {
        setError(data.message || 'Błąd rejestracji');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas rejestracji');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  const sharedInputStyles = {
    root: {
      width: '100%',
    },
    input: {
      background: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(255, 0, 0, 0.2)',
      borderRadius: 0,
      color: 'white',
      padding: '0 20px',
      fontSize: '16px',
      height: '50px',
      width: '100%',
      lineHeight: '50px',
      transition: 'all 0.3s ease',
      '&:focus': {
        border: '1px solid rgba(255, 0, 0, 0.5)',
        boxShadow: '0 0 10px rgba(255, 0, 0, 0.2)'
      },
      '&::placeholder': {
        color: '#666'
      }
    },
    wrapper: {
      width: '100%',
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
    <Box 
      style={{ 
        position: 'relative', 
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatedBackground />
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
          margin: '0 auto', // Dodane wyśrodkowanie poziome
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
          style={{ 
            color: '#FF0000',
            fontSize: '2.5rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontFamily: '"Orbitron", sans-serif',
            textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            textAlign: 'center', // Dodane wyśrodkowanie tekstu
            '@media (max-width: 480px)': {
              fontSize: '2rem'
            }
          }}
        >
          PARTYHUB
        </Title>

        <form onSubmit={form.onSubmit(handleRegister)}>
          <TextInput
            placeholder="Nazwa użytkownika"
            {...form.getInputProps('username')}
            mb={25}
            styles={sharedInputStyles}
          />

          <TextInput
            placeholder="Email"
            {...form.getInputProps('email')}
            mb={25}
            styles={sharedInputStyles}
          />

          <PasswordInput
            placeholder="Hasło"
            {...form.getInputProps('password')}
            mb={25}
            styles={{
              ...sharedInputStyles,
              innerInput: {
                color: 'white',
                height: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                paddingRight: '45px',
              },
            }}
          />

          <PasswordInput
            placeholder="Powtórz hasło"
            {...form.getInputProps('confirmPassword')}
            mb={40}
            styles={{
              ...sharedInputStyles,
              innerInput: {
                color: 'white',
                height: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                paddingRight: '45px',
              },
            }}
          />

          {error && (
            <Text color="red" mb={20} ta="center">
              {error}
            </Text>
          )}

          <Flex 
            direction="row" 
            justify="center" // Zmienione na wyśrodkowanie przycisków
            gap="md"
            style={{ width: '100%' }}
          >
            <Button 
              type="submit"
              style={{
                ...buttonBaseStyles,
                background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF4444, #FF0000)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                },
              }}
              fullWidth
              loading={loading}
            >
              ZAREJESTRUJ SIĘ
            </Button>

            <Button 
              style={{
                ...buttonBaseStyles,
                background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                '&:hover':{
                  background: 'linear-gradient(45deg, #FF4444, #FF0000)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                },
              }}
              fullWidth
              variant="subtle"
              onClick={() => navigate('/')}
              disabled={loading}
            >
              POWRÓT DO LOGOWANIA
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
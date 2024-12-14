// src/App.tsx
import { MantineProvider, createTheme } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { AgeVerification } from './components/AgeVerification';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'red',
  black: '#0A0A0A'
});

const App = () => {
  return (
    <MantineProvider 
      theme={theme}
      defaultColorScheme="dark"
    >
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #0A0A0A 0%, #1A1A1A 100%)',
        padding: 0,
        margin: 0,
      }}>
        <Routes>
          <Route path="/" element={<><AgeVerification /><Login /></>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </MantineProvider>
  );
};

export default App;
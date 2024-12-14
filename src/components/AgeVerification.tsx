// src/components/AgeVerification.tsx
import { useState } from 'react';
import { Modal, Button, Container, Title, Text, Space } from '@mantine/core';

export const AgeVerification: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(true);

  const handleVerify = (): void => {
    localStorage.setItem('ageVerified', 'true');
    setOpened(false);
  };

  if (localStorage.getItem('ageVerified')) return null;

  return (
    <Modal
      opened={opened}
      onClose={() => {}}
      closeOnClickOutside={false}
      withCloseButton={false}
      centered
      style={{ backgroundColor: '#1A1B1E' }}
    >
      <Container>
        <Title order={2} ta="center">
          Weryfikacja wieku
        </Title>
        <Space h="md" />
        <Text ta="center">
          Musisz mieć ukończone 18 lat, aby korzystać z tej aplikacji.
        </Text>
        <Space h="xl" />
        <Button onClick={handleVerify} size="lg" fullWidth>
          Mam ukończone 18 lat
        </Button>
        <Space h="md" />
        <Button 
          variant="subtle" 
          onClick={() => window.location.href = "https://google.com"}
          fullWidth
        >
          Opuść stronę
        </Button>
      </Container>
    </Modal>
  );
};
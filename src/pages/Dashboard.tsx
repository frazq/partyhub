import { Box, Title, Card, Text, Button, Stack, SimpleGrid, Group, Container } from '@mantine/core';
import { AnimatedBackground } from '../components/AnimatedBackground';


export const Dashboard = () => {
  const commonCardStyle = {
    background: 'rgba(20, 20, 20, 0.95)',
    border: '1px solid rgba(255, 0, 0, 0.1)',
    backdropFilter: 'blur(20px)',
  };

  const EventCard = ({ index }: { index: number }) => (
    <Card style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 0, 0, 0.1)' }}>
      <Group justify="space-between">
        <div>
          <Text size="lg" fw={500} c="white">Club Night {index}</Text>
          <Text size="sm" c="dimmed">Piątek, 20:00</Text>
        </div>
        <Button
          variant="filled"
          style={{
            background: 'linear-gradient(45deg, #FF0000, #FF4444)',
            border: 'none',
          }}
        >
          Rezerwuj
        </Button>
      </Group>
    </Card>
  );

  return (
    <Container fluid p={0} style={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatedBackground />
      
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 0, 0, 0.1)',
          zIndex: 10
        }}
      >
        <Group justify="space-between">
          <Title
            order={2}
            c="#FF0000"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
            }}
          >
            PARTYHUB
          </Title>
          <Group>
            <Button variant="subtle" c="red">Mój Profil</Button>
            <Button variant="subtle" c="red">Wyloguj</Button>
          </Group>
        </Group>
      </Box>

      <Container p="xl" style={{ marginTop: 100 }}>
        <SimpleGrid cols={1} spacing="xl">
          <Card style={commonCardStyle}>
            <Title order={3} mb="md" c="#FF4444">Nadchodzące Wydarzenia</Title>
            <Stack gap="md">
              {[1, 2, 3].map((i) => (
                <EventCard key={i} index={i} />
              ))}
            </Stack>
          </Card>

          <SimpleGrid cols={2} spacing="xl">
            <Card style={commonCardStyle}>
              <Title order={3} mb="md" c="#FF4444">Twój Status</Title>
              <Stack gap="sm">
                <Text c="white">Rezerwacje: 3</Text>
                <Text c="white">Punkty VIP: 150</Text>
                <Text c="white">Status: Gold Member</Text>
              </Stack>
            </Card>

            <Card style={commonCardStyle}>
              <Title order={3} mb="md" c="#FF4444">Powiadomienia</Title>
              <Stack gap="sm">
                {[1, 2].map((i) => (
                  <Text key={i} size="sm" c="white">
                    Nowe wydarzenie w tym tygodniu!
                  </Text>
                ))}
              </Stack>
            </Card>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Dashboard;

"use client";

import { SimpleGrid, Box, Title, Text, Paper, Stack } from "@mantine/core";

const CARDS = [
  {
    title: "Male tvrtke",
    description: "Web stranica za male obrte, salone, restorane i lokalne usluge.",
    icon: "🏪",
  },
  {
    title: "Brza online prisutnost",
    description: "Idealno ako želite profesionalnu web stranicu bez dugog i skupog razvoja.",
    icon: "⚡",
  },
  {
    title: "Jednostavno održavanje",
    description: "Stranice su jednostavne, brze i lako se prilagođavaju vašem poslovanju.",
    icon: "🔧",
  },
];

export function TargetAudienceSection() {
  return (
    <Box
      py={80}
      px={{ base: 16, sm: 24 }}
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        borderRadius: 16,
      }}
    >
      <Stack gap="xl" align="center" mb="xl">
        <Title order={2} c="white" ta="center" size="h3">
          Za koga je ova usluga?
        </Title>
      </Stack>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" maw={1000} mx="auto">
        {CARDS.map((card) => (
          <Paper
            key={card.title}
            p="lg"
            radius="lg"
            withBorder
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(255,255,255,0.12)",
              textAlign: "center",
            }}
          >
            <Box mb="sm" style={{ fontSize: 40, lineHeight: 1 }}>
              {card.icon}
            </Box>
            <Title order={4} c="white" ta="center" mb="xs">
              {card.title}
            </Title>
            <Text size="sm" c="gray.4" ta="center">
              {card.description}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}

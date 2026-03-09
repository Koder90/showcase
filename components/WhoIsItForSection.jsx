"use client";

import { SimpleGrid, Box, Title, Text, Paper, Stack } from "@mantine/core";
import { IconBuildingStore, IconToolsKitchen2, IconBriefcase } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const CARDS = [
  {
    title: "Obrti i mali biznisi",
    description: "Web stranica za male obrte, salone, restorane i lokalne usluge.",
    Icon: IconBuildingStore,
  },
  {
    title: "Restorani i eventi",
    description: "Idealno za ugostiteljstvo, vjenčanja i sve vrste događaja.",
    Icon: IconToolsKitchen2,
  },
  {
    title: "Freelanceri i tvrtke",
    description: "Profesionalna prisutnost za freelancere, tvrtke i osobni branding.",
    Icon: IconBriefcase,
  },
];

export function WhoIsItForSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box id="za-koga" py={{ base: 64, sm: 80 }} px={{ base: 20, sm: 32 }}>
      <Stack gap="xl" align="center" mb="xl">
        <Title order={2} c="white" ta="center" size={isMobile ? "h3" : "h2"}>
          Za koga je ova usluga?
        </Title>
        <Text size="md" c="gray.4" ta="center" maw={520}>
          Jednostavne web stranice za one koji žele brzo i profesionalno na web.
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" maw={900} mx="auto">
        {CARDS.map((card) => {
          const CardIcon = card.Icon;
          return (
          <Paper
            key={card.title}
            className="section-card-hover"
            p="xl"
            radius="lg"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            <Box
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(14, 165, 233, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <CardIcon size={28} color="#0ea5e9" stroke={2} />
            </Box>
            <Title order={4} c="white" ta="center" mb="xs">
              {card.title}
            </Title>
            <Text size="sm" c="gray.4" ta="center" style={{ lineHeight: 1.6 }}>
              {card.description}
            </Text>
          </Paper>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

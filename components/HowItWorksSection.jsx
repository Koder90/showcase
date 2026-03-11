"use client";

import { SimpleGrid, Box, Title, Text, Paper, Stack } from "@mantine/core";
import { IconPalette, IconSend, IconRocket } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const STEPS = [
  {
    step: 1,
    title: "Odaberite stil",
    description: "Pregledajte predloške i odaberite dizajn koji odgovara vašem brendu.",
    Icon: IconPalette,
  },
  {
    step: 2,
    title: "Pošaljite upit",
    description: "Ispunite kratki obrazac i opisite što vam treba. Odgovaramo brzo.",
    Icon: IconSend,
  },
  {
    step: 3,
    title: "Dobijete svoju stranicu",
    description: "Dobijete modernu, brzu web stranicu prilagođenu vašem poslovanju.",
    Icon: IconRocket,
  },
];

export function HowItWorksSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Box id="kako-funkcionira" py={{ base: 64, sm: 80 }} px={0}>
        <Stack gap="xl" align="center" mb="xl" px={20}>
          <Title order={2} c="white" ta="center" size="h3">
            Kako funkcionira
          </Title>
          <Text size="md" c="gray.4" ta="center" maw={520}>
            Tri jednostavna koraka do vaše nove web stranice.
          </Text>
        </Stack>
        <div className="mobile-swipe-container">
          {STEPS.map((step) => {
            const StepIcon = step.Icon;
            return (
              <div key={step.step} className="mobile-swipe-card">
                <Paper
                  className="section-card-hover"
                  p="xl"
                  radius="lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <StepIcon size={28} color="#22d3ee" stroke={2} />
                  </Box>
                  <Text fw={700} c="cyan.3" size="sm" mb={4}>
                    Korak {step.step}
                  </Text>
                  <Title order={4} c="white" ta="center" mb="xs">
                    {step.title}
                  </Title>
                  <Text size="sm" c="gray.4" ta="center" style={{ lineHeight: 1.6 }}>
                    {step.description}
                  </Text>
                </Paper>
              </div>
            );
          })}
        </div>
        <p className="mobile-swipe-hint">
          Povucite za više <span className="mobile-swipe-hint-arrow">→</span>
        </p>
      </Box>
    );
  }

  return (
    <Box id="kako-funkcionira" py={{ base: 64, sm: 80 }} px={{ base: 20, sm: 32 }}>
      <Stack gap="xl" align="center" mb="xl">
        <Title order={2} c="white" ta="center" size="h2">
          Kako funkcionira
        </Title>
        <Text size="md" c="gray.4" ta="center" maw={520}>
          Tri jednostavna koraka do vaše nove web stranice.
        </Text>
      </Stack>
      <SimpleGrid cols={3} spacing="lg" maw={900} mx="auto">
        {STEPS.map((step) => {
          const StepIcon = step.Icon;
          return (
            <Paper
              key={step.step}
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
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <StepIcon size={28} color="#22d3ee" stroke={2} />
              </Box>
              <Text fw={700} c="cyan.3" size="sm" mb={4}>
                Korak {step.step}
              </Text>
              <Title order={4} c="white" ta="center" mb="xs">
                {step.title}
              </Title>
              <Text size="sm" c="gray.4" ta="center" style={{ lineHeight: 1.6 }}>
                {step.description}
              </Text>
            </Paper>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

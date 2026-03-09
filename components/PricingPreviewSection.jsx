"use client";

import Link from "next/link";
import { Box, Title, Text, Paper, Stack, Button, List } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const FEATURES = [
  "moderan dizajn",
  "mobilna optimizacija",
  "brza isporuka",
];

export function PricingPreviewSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box id="cijene" py={{ base: 64, sm: 80 }} px={{ base: 20, sm: 32 }}>
      <Box maw={420} mx="auto">
        <Paper
          className="section-card-hover"
          p="xl"
          radius="xl"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Title order={3} c="white" ta="center" mb="md">
            Jednostavna web stranica
          </Title>
          <List
            spacing="sm"
            center
            icon={<IconCheck size={18} color="#22d3ee" />}
            styles={{
              itemIcon: { marginTop: 2 },
            }}
          >
            {FEATURES.map((f) => (
              <List.Item key={f}>
                <Text size="md" c="gray.3">
                  {f}
                </Text>
              </List.Item>
            ))}
          </List>
          <Button
            component={Link}
            href="/#kontakt"
            variant="gradient"
            gradient={{ from: "blue.6", to: "cyan.5" }}
            size="md"
            radius="xl"
            fullWidth
            mt="xl"
            style={{ minHeight: 48 }}
          >
            Zatraži ponudu
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

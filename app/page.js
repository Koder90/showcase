"use client";

import { useMemo, useState } from "react";
import {
  AppShell,
  Box,
  Group,
  NavLink,
  Paper,
  Stack,
  Text,
  Title,
  Anchor,
} from "@mantine/core";
import { showcases } from "../data/showcases";
import { ShowcasePage } from "../components/showcase/ShowcasePage";

export default function HomePage() {
  const [activeId, setActiveId] = useState(showcases[0]?.id);
  const activeShowcase = useMemo(
    () => showcases.find((item) => item.id === activeId) ?? showcases[0],
    [activeId]
  );

  return (
      <Box
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: 24,
          paddingBottom: 96,
          overflow: "hidden",
        }}
      >
      <Paper
        radius="lg"
        px="xl"
        py="md"
        withBorder
        shadow="md"
        style={{ alignSelf: "center" }}
      >
        <Stack align="center" gap={6} style={{ textAlign: "center" }}>
          <Title order={1}>Širok spektar usluga</Title>
          <Text size="lg" c="dimmed">
            izaberite predložak prema želji i potrebi vašeg posla
          </Text>
        </Stack>
      </Paper>

      <Box style={{ flex: 1, minHeight: 0 }}>
        <AppShell
          padding={0}
          navbar={{ width: 260, breakpoint: "sm" }}
          styles={{
            main: {
              height: "100%",
              background: "transparent",
            },
            navbar: {
              height: "100%",
              borderRight: "1px solid #dee2e6",
            },
          }}
          style={{ height: "100%" }}
        >
          <AppShell.Navbar p="md">
            <Stack gap="md">
              <Paper radius="md" p="md" withBorder shadow="sm">
                <Text fw={700} size="md">
                  Showcase stranice
                </Text>
                <Text size="sm" c="dimmed">
                  Odaberite temu
                </Text>
              </Paper>
              <Stack gap={6}>
                {showcases.map((showcase) => (
                  <NavLink
                    key={showcase.id}
                    label={showcase.label}
                    active={showcase.id === activeId}
                    onClick={() => setActiveId(showcase.id)}
                    variant="light"
                  />
                ))}
              </Stack>
            </Stack>
          </AppShell.Navbar>

          <AppShell.Main>
            <Box style={{ height: "100%", overflow: "hidden" }}>
              <Box style={{ height: "100%", overflowY: "auto", paddingBottom: 120 }}>
                {activeShowcase && <ShowcasePage showcase={activeShowcase} />}
              </Box>
            </Box>
          </AppShell.Main>
        </AppShell>
      </Box>

      <Paper
        component="footer"
        radius="md"
        px="md"
        py="sm"
        withBorder
        shadow="sm"
        style={{
          position: "fixed",
          left: "50%",
          bottom: 16,
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <Group justify="center">
          <Text size="sm" fw={600}>
            designed by simple web -{" "}
            <Anchor
              href="https://simple-web-blue.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://simple-web-blue.vercel.app/
            </Anchor>
          </Text>
        </Group>
      </Paper>
    </Box>
  );
}

"use client";

import Link from "next/link";
import { Box, Title, Text, Group, Button, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      id="hero"
      py={{ base: 64, sm: 80 }}
      px={{ base: 20, sm: 32 }}
      style={{
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "60%",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14, 165, 233, 0.2) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Stack gap="lg" align="center" style={{ position: "relative", zIndex: 1 }}>
        <Title
          order={1}
          c="white"
          size={isMobile ? "2rem" : "3rem"}
          fw={700}
          style={{ lineHeight: 1.15, maxWidth: 720 }}
        >
          Jednostavne web stranice za male biznise
        </Title>
        <Text size={isMobile ? "md" : "lg"} c="gray.4" maw={560} style={{ lineHeight: 1.6 }}>
          Odaberite dizajn, pošaljite upit i dobijte modernu web stranicu za svoje poslovanje.
        </Text>
        <Group gap="md" justify="center" wrap="wrap">
          <Button
            component={Link}
            href="/#primjeri"
            variant="gradient"
            gradient={{ from: "blue.6", to: "cyan.5" }}
            size={isMobile ? "md" : "lg"}
            radius="xl"
            style={{ minHeight: 48 }}
          >
            Pogledaj primjere
          </Button>
          <Button
            component={Link}
            href="/#kontakt"
            variant="outline"
            color="gray.3"
            size={isMobile ? "md" : "lg"}
            radius="xl"
            style={{ minHeight: 48, borderColor: "rgba(255,255,255,0.3)" }}
          >
            Zatraži ponudu
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}

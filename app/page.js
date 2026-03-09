"use client";

import { Box, Stack, Title, Text, Anchor, Paper, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { showcases } from "../data/showcases";
import { HeroSection } from "../components/HeroSection";
import { ShowcaseGrid } from "../components/ShowcaseGrid";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { WhoIsItForSection } from "../components/WhoIsItForSection";
import { PricingPreviewSection } from "../components/PricingPreviewSection";
import { ContactForm } from "../components/ContactForm";

export default function HomePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const showcaseOptions = showcases.map((s) => ({
    value: s.id,
    label: s.label,
  }));

  return (
    <Box style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
      <Stack gap={0} maw={1200} mx="auto">
        <HeroSection />

        {/* Primjeri stranica */}
        <Box id="primjeri" py={{ base: 64, sm: 80 }} px={{ base: 20, sm: 32 }}>
          <Stack gap="md" align="center" mb="xl">
            <Title order={2} c="white" ta="center" size={isMobile ? "h3" : "h2"}>
              Primjeri stranica
            </Title>
            <Text size="md" c="gray.4" ta="center" maw={560}>
              Odaberite stil koji najbolje odgovara vašem poslovanju.
            </Text>
          </Stack>
          <ShowcaseGrid showcases={showcases} />
        </Box>

        <HowItWorksSection />
        <WhoIsItForSection />
        <PricingPreviewSection />

        {/* Contact */}
        <Box id="kontakt" py={{ base: 64, sm: 80 }} px={{ base: 20, sm: 32 }}>
          <Stack gap="lg" align="center">
            <Title order={2} c="white" size={isMobile ? "h3" : "h2"}>
              Kontakt
            </Title>
            <ContactForm showcaseOptions={showcaseOptions} />
          </Stack>
        </Box>

        {/* Footer */}
        <Paper
          component="footer"
          className="glass-panel"
          radius="md"
          px="md"
          py="sm"
          m={{ base: "md", sm: "xl" }}
          style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}
        >
          <Group justify="center">
            <Text size={isMobile ? "xs" : "sm"} fw={600} c="gray.3">
              designed by simple web –{" "}
              <Anchor
                href="https://simple-web-blue.vercel.app/"
                target="_blank"
                rel="noreferrer"
                c="cyan.3"
              >
                https://simple-web-blue.vercel.app/
              </Anchor>
            </Text>
          </Group>
        </Paper>
      </Stack>
    </Box>
  );
}

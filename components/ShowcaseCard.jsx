"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Title, Text, Button } from "@mantine/core";

const SHORT_DESCRIPTIONS = {
  futurizam: "Moderan i dinamičan stil za gaming ili tech projekte.",
  rustikalno: "Topao i prirodan stil za restorane, vrtove ili događaje.",
  classy: "Elegantni dizajn za vjenčanja i evente.",
  "irish-pub": "Atmosferski stil za pubove i barove.",
  knjiznica: "Čist i pregledan dizajn za edukaciju i sadržaj.",
  poslovna: "Profesionalna stranica za tvrtke i osobni branding.",
};

export function ShowcaseCard({ showcase }) {
  const { id, label, content } = showcase;
  const imageSrc = content?.image ?? "/images/placeholder.jpg";
  const description = SHORT_DESCRIPTIONS[id] ?? "";

  return (
    <Link href={`/showcase/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        component="article"
        className="showcase-card"
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: 220,
            flexShrink: 0,
          }}
        >
          <Image
            src={imageSrc}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            unoptimized={false}
          />
        </Box>
        <Box
          p="md"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            background: "#fff",
          }}
        >
          <Title order={4} fw={600} lineClamp={1} style={{ margin: 0 }}>
            {label}
          </Title>
          <Text size="sm" c="dimmed" lineClamp={2} style={{ flex: 1 }}>
            {description}
          </Text>
          <Button
            component="span"
            variant="light"
            size="sm"
            radius="md"
            style={{ alignSelf: "flex-start", minHeight: 44 }}
          >
            Pregledaj primjer
          </Button>
        </Box>
      </Box>
    </Link>
  );
}

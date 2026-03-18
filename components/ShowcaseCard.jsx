"use client";

import { useRef, useState } from "react";
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
  rentacar: "Moderan i praktičan web dizajn za iznajmljivanje vozila.",
};

const MAX_TILT = 6;

export function ShowcaseCard({ showcase, isMobile = false }) {
  const { id, label, content } = showcase;
  const imageSrc = content?.image ?? "/images/placeholder.jpg";
  const description = SHORT_DESCRIPTIONS[id] ?? "";
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [reflectionStyle, setReflectionStyle] = useState({ opacity: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovering(true);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-4px) scale(1.02)");
    setReflectionStyle({ opacity: 0 });
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 2 * MAX_TILT;
    const rotateX = (y - 0.5) * -2 * MAX_TILT;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`);
    setReflectionStyle({
      opacity: 0.1,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.5) 0%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setTransform("");
    setReflectionStyle({ opacity: 0 });
    setIsHovering(false);
  };

  const cardContent = (
    <Box
      ref={cardRef}
      component="article"
      className="showcase-card"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: isMobile ? "0 25px 50px -12px rgba(0,0,0,0.25)" : (isHovering && transform ? "0 20px 40px -12px rgba(0,0,0,0.35), 0 0 30px rgba(14, 165, 233, 0.15)" : "0 25px 50px -12px rgba(0,0,0,0.25)"),
        transition: isMobile ? "transform 0.25s ease, box-shadow 0.25s ease" : "transform 0.2s ease, box-shadow 0.25s ease",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transform: isMobile ? undefined : transform || undefined,
        transformStyle: isMobile ? undefined : "preserve-3d",
      }}
    >
      {!isMobile && (
        <Box
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: 24,
            zIndex: 1,
            transition: "opacity 0.2s ease",
            ...reflectionStyle,
          }}
        />
      )}
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
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
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
  );

  return (
    <Link href={`/showcase/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      {cardContent}
    </Link>
  );
}

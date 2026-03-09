"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Group, Button, Text, Burger, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";

const NAV_ITEMS = [
  { href: "/", label: "Početna" },
  { href: "/#primjeri", label: "Primjeri stranica" },
  { href: "/#kako-funkcionira", label: "Kako funkcionira" },
  { href: "/#cijene", label: "Cijene" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      component="header"
      className="glass-panel"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <Group justify="space-between" px={{ base: "md", sm: "xl" }} py="sm" maw={1400} mx="auto">
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Text fw={700} size="lg" c="white">
            Simple Web
          </Text>
        </Link>

        {!isMobile ? (
          <Group gap="xl">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <Text size="sm" fw={500} c="gray.3" style={{ transition: "color 0.2s" }} className="nav-link">
                  {item.label}
                </Text>
              </Link>
            ))}
            <Button
              component={Link}
              href="/#kontakt"
              variant="gradient"
              gradient={{ from: "blue.6", to: "cyan.5" }}
              size="sm"
              radius="xl"
            >
              Zatraži ponudu
            </Button>
          </Group>
        ) : (
          <Burger opened={opened} onClick={toggle} color="white" size="sm" aria-label="Meni" />
        )}
      </Group>

      {/* Mobile full-screen menu */}
      {isMobile && (
        <Box
          className={opened ? "mobile-menu-panel" : undefined}
        style={{
            position: "fixed",
            inset: 0,
            top: 56,
            zIndex: 99,
            background: "rgba(15, 23, 42, 0.97)",
            backdropFilter: "blur(12px)",
            display: opened ? "block" : "none",
            padding: "24px 20px",
            overflow: "auto",
          }}
        >
          <Stack gap="md" pt="xl">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => toggle.close()}
                style={{ display: "block", minHeight: 44 }}
              >
                <Text size="lg" fw={500} c="white" py="sm">
                  {item.label}
                </Text>
              </Link>
            ))}
            <Button
              component={Link}
              href="/#kontakt"
              onClick={() => toggle.close()}
              variant="gradient"
              gradient={{ from: "blue.6", to: "cyan.5" }}
              size="md"
              radius="xl"
              fullWidth
              style={{ minHeight: 48 }}
            >
              Zatraži ponudu
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

"use client";

import Link from "next/link";
import { Box, Group, Button, Text, Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const NAV_ITEMS = [
  { href: "/", label: "Početna" },
  { href: "/#primjeri", label: "Primjeri stranica" },
  { href: "/#kako-funkcionira", label: "Kako funkcionira" },
  { href: "/#cijene", label: "Cijene" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader({ mobileMenuOpened, onMobileMenuToggle }) {
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
            Showcase Studio
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
          <Burger
            opened={mobileMenuOpened ?? false}
            onClick={onMobileMenuToggle ?? (() => {})}
            color="white"
            size="sm"
            aria-label="Meni"
          />
        )}
      </Group>
    </Box>
  );
}

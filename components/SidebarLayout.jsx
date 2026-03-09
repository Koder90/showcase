"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppShell, Stack, Text, Box, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDeviceGamepad3,
  IconLeaf,
  IconDiamond,
  IconBeer,
  IconBook,
  IconBuilding,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { showcases } from "../data/showcases";
import { SiteHeader } from "./SiteHeader";

const SHOWCASE_STYLES = {
  futurizam: {
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    Icon: IconDeviceGamepad3,
  },
  rustikalno: {
    gradient: "linear-gradient(135deg, #92400e 0%, #ea580c 100%)",
    Icon: IconLeaf,
  },
  classy: {
    gradient: "linear-gradient(135deg, #5b21b6 0%, #eab308 100%)",
    Icon: IconDiamond,
  },
  "irish-pub": {
    gradient: "linear-gradient(135deg, #166534 0%, #d97706 100%)",
    Icon: IconBeer,
  },
  knjiznica: {
    gradient: "linear-gradient(135deg, #2563eb 0%, #0d9488 100%)",
    Icon: IconBook,
  },
  poslovna: {
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #64748b 100%)",
    Icon: IconBuilding,
  },
};

export function SidebarLayout({ children }) {
  const pathname = usePathname();
  const [showcaseOpen, { toggle: toggleShowcase }] = useDisclosure(true);

  return (
    <AppShell
      padding={0}
      navbar={{
        width: 280,
        breakpoint: "sm",
      }}
      styles={{
        root: { height: "100%" },
        main: { background: "transparent", minHeight: "100vh" },
        navbar: {
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      <AppShell.Navbar p="md">
        <Stack gap="md">
          <Box
            onClick={toggleShowcase}
            style={{
              cursor: "pointer",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Text fw={700} size="sm" c="white">
              Showcase stranice
            </Text>
            {showcaseOpen ? (
              <IconChevronDown size={18} color="rgba(255,255,255,0.6)" />
            ) : (
              <IconChevronRight size={18} color="rgba(255,255,255,0.6)" />
            )}
          </Box>
          <Collapse in={showcaseOpen}>
            <Stack gap={8}>
              <Link
                href="/"
                style={{ textDecoration: "none" }}
              >
                <Box
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: pathname === "/" ? "rgba(14, 165, 233, 0.2)" : "rgba(255,255,255,0.06)",
                    border: `1px solid ${pathname === "/" ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                    transition: "all 0.2s ease",
                  }}
                  className="sidebar-showcase-btn"
                >
                  <Text size="sm" fw={600} c="white">
                    Naslovnica
                  </Text>
                </Box>
              </Link>
              {showcases.map((showcase) => {
                const style = SHOWCASE_STYLES[showcase.id] ?? { gradient: "linear-gradient(135deg, #475569 0%, #64748b 100%)", Icon: IconBuilding };
                const Icon = style.Icon;
                const isActive = pathname === `/showcase/${showcase.id}`;
                return (
                  <Link
                    key={showcase.id}
                    href={`/showcase/${showcase.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      className="sidebar-showcase-btn"
                      style={{
                        padding: "12px 14px",
                        borderRadius: 12,
                        background: style.gradient,
                        border: isActive ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.2)",
                        boxShadow: isActive ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Icon size={20} color="rgba(255,255,255,0.95)" stroke={2} />
                      <Text size="sm" fw={600} c="white" style={{ flex: 1 }}>
                        {showcase.label}
                      </Text>
                    </Box>
                  </Link>
                );
              })}
            </Stack>
          </Collapse>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Box style={{ minHeight: "100%" }}>
          <SiteHeader />
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

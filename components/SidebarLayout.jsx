"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell, Stack, Text, Box, Collapse, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconDeviceGamepad3,
  IconLeaf,
  IconDiamond,
  IconBeer,
  IconBook,
  IconBuilding,
  IconCar,
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
  rentacar: {
    gradient: "linear-gradient(135deg, #0b2a5b 0%, #06b6d4 100%)",
    Icon: IconCar,
  },
};

const NAV_ITEMS = [
  { href: "/", label: "Početna" },
  { href: "/#primjeri", label: "Primjeri stranica" },
  { href: "/#kako-funkcionira", label: "Kako funkcionira" },
  { href: "/#cijene", label: "Cijene" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SidebarLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [showcaseOpen, { toggle: toggleShowcase }] = useDisclosure(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Scroll lock: when mobile drawer is open, lock body scroll
  useEffect(() => {
    if (isMobile && mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, mobileMenuOpen]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href) {
      requestAnimationFrame(() => {
        router.push(href);
      });
    }
  };

  // Mobile-only layout after mount (avoids hydration mismatch); no AppShell so main content is always visible
  if (hasMounted && isMobile) {
    return (
      <>
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            overflow: "auto",
          }}
        >
          <SiteHeader
            mobileMenuOpened={mobileMenuOpen}
            onMobileMenuToggle={toggleMobileMenu}
          />
          {children}
        </div>

        {/* Overlay: native button so tap always works */}
        {mobileMenuOpen && (
          <button
            type="button"
            aria-label="Zatvori izbornik"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 150,
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              margin: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}

        {/* Drawer */}
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: 300,
            maxWidth: "85vw",
            zIndex: 151,
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.28s ease",
            background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
            boxShadow: mobileMenuOpen ? "8px 0 32px rgba(0,0,0,0.4)" : "none",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            overflow: "auto",
            padding: "20px 16px",
            pointerEvents: mobileMenuOpen ? "auto" : "none",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Zatvori izbornik"
              style={{
                minWidth: 48,
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 12,
                cursor: "pointer",
                color: "#fff",
                fontSize: 24,
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          </div>

          <Stack gap={6} mb="xl">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleMobileNavClick(item.href)}
                style={{
                  padding: "14px 16px",
                  borderRadius: 12,
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  font: "inherit",
                  color: "#fff",
                }}
              >
                <Text size="md" fw={500} c="white">
                  {item.label}
                </Text>
              </button>
            ))}
          </Stack>

          <Text fw={700} size="sm" c="gray.4" mb="sm" px={4}>
            Showcase stranice
          </Text>
          <Stack gap={8} mb="xl">
            <button
              type="button"
              onClick={() => handleMobileNavClick("/")}
              style={{
                padding: "14px 16px",
                borderRadius: 12,
                minHeight: 44,
                background: pathname === "/" ? "rgba(14, 165, 233, 0.2)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${pathname === "/" ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                font: "inherit",
                color: "#fff",
              }}
            >
              <Text size="sm" fw={600} c="white">
                Naslovnica
              </Text>
            </button>
            {showcases.map((showcase) => {
              const style = SHOWCASE_STYLES[showcase.id] ?? { gradient: "linear-gradient(135deg, #475569 0%, #64748b 100%)", Icon: IconBuilding };
              const Icon = style.Icon;
              const isActive = pathname === `/showcase/${showcase.id}`;
              const href = `/showcase/${showcase.id}`;
              return (
                <button
                  key={showcase.id}
                  type="button"
                  onClick={() => handleMobileNavClick(href)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 12,
                    minHeight: 44,
                    background: style.gradient,
                    border: isActive ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.2)",
                    boxShadow: isActive ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    font: "inherit",
                    color: "#fff",
                  }}
                >
                  <Icon size={20} color="rgba(255,255,255,0.95)" stroke={2} />
                  <Text size="sm" fw={600} c="white" style={{ flex: 1 }}>
                    {showcase.label}
                  </Text>
                </button>
              );
            })}
          </Stack>

          <Button
            variant="gradient"
            gradient={{ from: "blue.6", to: "cyan.5" }}
            size="md"
            radius="xl"
            fullWidth
            style={{ minHeight: 48 }}
            onClick={() => handleMobileNavClick("/#kontakt")}
          >
            Zatraži ponudu
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
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
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Box
                    className="sidebar-showcase-btn"
                    style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: pathname === "/" ? "rgba(14, 165, 233, 0.2)" : "rgba(255,255,255,0.06)",
                      border: `1px solid ${pathname === "/" ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                      transition: "all 0.2s ease",
                    }}
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
                    <Link key={showcase.id} href={`/showcase/${showcase.id}`} style={{ textDecoration: "none" }}>
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
          <Box
            style={{
              minHeight: "100vh",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <SiteHeader
              mobileMenuOpened={mobileMenuOpen}
              onMobileMenuToggle={toggleMobileMenu}
            />
            {children}
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

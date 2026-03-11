"use client";

import { SimpleGrid, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ShowcaseCard } from "./ShowcaseCard";

export function ShowcaseGrid({ showcases }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Box
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)",
          borderRadius: 16,
        }}
      >
        <div className="mobile-swipe-container">
          {showcases.map((showcase) => (
            <div key={showcase.id} className="mobile-swipe-card">
              <ShowcaseCard showcase={showcase} isMobile />
            </div>
          ))}
        </div>
        <p className="mobile-swipe-hint">
          Povucite za više <span className="mobile-swipe-hint-arrow">→</span>
        </p>
      </Box>
    );
  }

  return (
    <Box
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)",
        borderRadius: 16,
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={40} verticalSpacing={40}>
        {showcases.map((showcase) => (
          <ShowcaseCard key={showcase.id} showcase={showcase} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

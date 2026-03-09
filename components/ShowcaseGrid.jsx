"use client";

import { SimpleGrid, Box } from "@mantine/core";
import { ShowcaseCard } from "./ShowcaseCard";

export function ShowcaseGrid({ showcases }) {
  return (
    <Box
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)",
        borderRadius: 16,
      }}
    >
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={40}
        verticalSpacing={40}
      >
        {showcases.map((showcase) => (
          <ShowcaseCard key={showcase.id} showcase={showcase} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

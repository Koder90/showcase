"use client";

import { use, useMemo } from "react";
import { showcases } from "../../../data/showcases";
import { ShowcasePage } from "../../../components/showcase/ShowcasePage";
import { Box } from "@mantine/core";

export default function ShowcaseSlugPage({ params }) {
  const resolvedParams = use(params);
  const slug = typeof resolvedParams?.slug === "string" ? resolvedParams.slug : resolvedParams?.slug?.[0];
  const showcase = useMemo(
    () => showcases.find((s) => s.id === slug) ?? null,
    [slug]
  );

  if (!showcase) {
    return (
      <Box p="xl" ta="center">
        Showcase not found.
      </Box>
    );
  }

  return (
    <Box style={{ minHeight: "100vh" }}>
      <ShowcasePage showcase={showcase} />
    </Box>
  );
}

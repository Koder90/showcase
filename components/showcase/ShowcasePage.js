import {
  Anchor,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  MantineProvider,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  ThemeIcon,
} from "@mantine/core";

function SectionContainer({ layout, children, fullWidth }) {
  return (
    <Box
      px={layout.sectionPadding}
      style={{
        maxWidth: fullWidth ? "100%" : layout.contentWidth,
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
}

function SectionHeading({ children, layout, order = 2 }) {
  return (
    <Title
      order={order}
      tt={layout.headingCaps ? "uppercase" : "none"}
      fw={layout.headingWeight}
      style={{
        letterSpacing: layout.headingLetterSpacing,
      }}
    >
      {children}
    </Title>
  );
}

function ShowcaseHeader({ palette, layout, content }) {
  return (
    <Box
      px={layout.sectionPadding}
      py={24}
      style={{
        position: layout.headerSticky ? "sticky" : "relative",
        top: 0,
        zIndex: 3,
        background: layout.headerSticky ? palette.background : "transparent",
        borderBottom: layout.headerBorder ? `1px solid ${palette.border}` : "none",
        boxShadow: layout.headerShadow ? "0 6px 18px rgba(0,0,0,0.18)" : "none",
      }}
    >
      <Group justify="space-between" align="center">
        <Stack gap={4}>
          <Text
            tt={layout.taglineCaps ? "uppercase" : "none"}
            fw={600}
            c={palette.muted}
            size="xs"
            style={{ letterSpacing: layout.taglineLetterSpacing }}
          >
            {content.tagline}
          </Text>
          <Title order={3} fw={layout.logoWeight}>
            Showcase Studio
          </Title>
        </Stack>
        <Group gap="lg">
          {content.nav.map((item) => (
            <Anchor
              key={item}
              href="#"
              underline="never"
              c={palette.text}
              fw={500}
              onClick={(event) => event.preventDefault()}
            >
              {item}
            </Anchor>
          ))}
        </Group>
      </Group>
    </Box>
  );
}

function ImagePlaceholder({ palette, layout }) {
  return (
    <Box
      style={{
        height: layout.placeholderHeight,
        borderRadius: layout.imageRadius,
        border: `1px solid ${palette.border}`,
        background: layout.placeholderGradient || palette.heroGradient,
        boxShadow: layout.imageShadow,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: "12%",
          borderRadius: layout.imageRadius,
          border: `1px dashed ${palette.accentSoft}`,
          opacity: 0.8,
        }}
      />
    </Box>
  );
}

function HeroSection({ palette, layout, content }) {
  const heroTitleSize = layout.heroTitleSize;
  const heroLayout = layout.heroLayout;
  const heroBackground = heroLayout === "full" ? palette.heroGradient : "transparent";

  return (
    <Box
      py={layout.heroPadding}
      style={{
        background: heroBackground,
        borderTop: layout.heroBorder ? `1px solid ${palette.border}` : "none",
        borderBottom: layout.heroBorder ? `1px solid ${palette.border}` : "none",
      }}
    >
      <SectionContainer layout={layout} fullWidth={heroLayout === "full"}>
        {heroLayout === "centered" && (
          <Stack gap={24} align="center" ta="center" maw={720} mx="auto">
            {layout.showHeroBadge && (
              <Badge color="brand" variant="light" size="lg">
                {content.tagline}
              </Badge>
            )}
            <Title
              order={1}
              fw={layout.heroWeight}
              style={{
                fontSize: heroTitleSize,
                lineHeight: layout.heroLineHeight,
                letterSpacing: layout.heroLetterSpacing,
              }}
            >
              {content.heroTitle}
            </Title>
            <Text c={palette.muted} size={layout.heroTextSize}>
              {content.heroText}
            </Text>
            <Group>
              <Button
                color="brand"
                size="md"
                radius={layout.buttonRadius}
                variant={layout.buttonVariant}
              >
                {content.heroCta}
              </Button>
              {layout.showSecondaryCta && (
                <Button variant={layout.secondaryButtonVariant} size="md" radius={layout.buttonRadius}>
                  Pogledaj detalje
                </Button>
              )}
            </Group>
          </Stack>
        )}

        {heroLayout === "split" && (
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Stack gap={20} maw={640}>
              {layout.showHeroBadge && (
                <Badge color="brand" variant="light" size="lg">
                  {content.tagline}
                </Badge>
              )}
              <Title
                order={1}
                fw={layout.heroWeight}
                style={{
                  fontSize: heroTitleSize,
                  lineHeight: layout.heroLineHeight,
                  letterSpacing: layout.heroLetterSpacing,
                }}
              >
                {content.heroTitle}
              </Title>
              <Text c={palette.muted} size={layout.heroTextSize}>
                {content.heroText}
              </Text>
              <Group>
                <Button
                  color="brand"
                  size="md"
                  radius={layout.buttonRadius}
                  variant={layout.buttonVariant}
                >
                  {content.heroCta}
                </Button>
                {layout.showSecondaryCta && (
                  <Button variant={layout.secondaryButtonVariant} size="md" radius={layout.buttonRadius}>
                    Pogledaj detalje
                  </Button>
                )}
              </Group>
            </Stack>
            {layout.showPlaceholder && <ImagePlaceholder palette={palette} layout={layout} />}
          </SimpleGrid>
        )}

        {heroLayout === "full" && (
          <Stack gap={28} maw={740}>
            {layout.showHeroBadge && (
              <Badge color="brand" variant="light" size="lg">
                {content.tagline}
              </Badge>
            )}
            <Title
              order={1}
              fw={layout.heroWeight}
              style={{
                fontSize: heroTitleSize,
                lineHeight: layout.heroLineHeight,
                letterSpacing: layout.heroLetterSpacing,
              }}
            >
              {content.heroTitle}
            </Title>
            <Text c={palette.muted} size={layout.heroTextSize}>
              {content.heroText}
            </Text>
            <Group>
              <Button
                color="brand"
                size="md"
                radius={layout.buttonRadius}
                variant={layout.buttonVariant}
              >
                {content.heroCta}
              </Button>
              {layout.showSecondaryCta && (
                <Button variant={layout.secondaryButtonVariant} size="md" radius={layout.buttonRadius}>
                  Pogledaj detalje
                </Button>
              )}
            </Group>
            {layout.showPlaceholder && <ImagePlaceholder palette={palette} layout={layout} />}
          </Stack>
        )}
      </SectionContainer>
    </Box>
  );
}

function FeaturesSection({ palette, layout, content }) {
  if (!content.features || content.features.length === 0) return null;
  const isList = layout.featuresLayout === "list";

  return (
    <Box
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("features") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout}>{content.featuresTitle}</SectionHeading>
          {isList ? (
            <Stack gap="md">
              {content.features.map((feature) => (
                <Group key={feature.title} align="flex-start" gap="md">
                  {layout.featuresWithIcons && (
                    <ThemeIcon variant="light" color="brand" radius={layout.buttonRadius}>
                      <Text fw={700} size="sm">
                        {feature.icon}
                      </Text>
                    </ThemeIcon>
                  )}
                  <Box>
                    <Text fw={600}>{feature.title}</Text>
                    <Text size="sm" c={palette.muted}>
                      {feature.description}
                    </Text>
                  </Box>
                </Group>
              ))}
            </Stack>
          ) : (
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {content.features.map((feature) => (
                <Paper
                  key={feature.title}
                  p="lg"
                  radius={layout.cardRadius}
                  bg={palette.surface}
                  style={{
                    border: `1px solid ${palette.border}`,
                    boxShadow: layout.cardShadow,
                  }}
                >
                  <Stack gap="xs">
                    {layout.featuresWithIcons && (
                      <ThemeIcon variant="light" color="brand" radius={layout.buttonRadius}>
                        <Text fw={700} size="sm">
                          {feature.icon}
                        </Text>
                      </ThemeIcon>
                    )}
                    <Text fw={600}>{feature.title}</Text>
                    <Text size="sm" c={palette.muted}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </SectionContainer>
    </Box>
  );
}

function AboutSection({ palette, layout, content }) {
  if (layout.aboutLayout === "library") {
    return (
      <Box
        py={layout.sectionPadding}
        style={{
          background: layout.sectionBackgrounds.includes("about") ? palette.surfaceAlt : "transparent",
        }}
      >
        <SectionContainer layout={layout} fullWidth>
          <Stack gap={layout.sectionGap}>
            <SectionHeading layout={layout}>{content.aboutTitle}</SectionHeading>
            <Text size="lg" c={palette.muted} maw={800}>
              {content.aboutText}
            </Text>
            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
              <Paper
                p="lg"
                radius={layout.cardRadius}
                bg={palette.surface}
                style={{ border: `1px solid ${palette.border}` }}
              >
                <Text fw={600} mb="sm">
                  Filtri
                </Text>
                <Stack gap="xs">
                  {content.libraryFilters.map((filter) => (
                    <Text key={filter} size="sm" c={palette.muted}>
                      {filter}
                    </Text>
                  ))}
                </Stack>
              </Paper>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                {content.libraryItems.map((item) => (
                  <Paper
                    key={item.title}
                    p="lg"
                    radius={layout.cardRadius}
                    bg={palette.surface}
                    style={{ border: `1px solid ${palette.border}` }}
                  >
                    <Stack gap="xs">
                      <Badge variant="light" color="brand">
                        {item.category}
                      </Badge>
                      <Text fw={600}>{item.title}</Text>
                      <Text size="sm" c={palette.muted}>
                        {item.description}
                      </Text>
                    </Stack>
                  </Paper>
                ))}
              </SimpleGrid>
            </SimpleGrid>
          </Stack>
        </SectionContainer>
      </Box>
    );
  }

  return (
    <Box
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("about") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout}>{content.aboutTitle}</SectionHeading>
          <Text size="lg" c={palette.muted} maw={720}>
            {content.aboutText}
          </Text>
          {layout.aboutLayout === "split" && (
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Stack gap="md">
                {content.aboutHighlights.map((item) => (
                  <Group key={item} align="center">
                    <ThemeIcon variant="light" color="brand" radius={layout.buttonRadius}>
                      <Text fw={700} size="sm">
                        ✓
                      </Text>
                    </ThemeIcon>
                    <Text fw={600}>{item}</Text>
                  </Group>
                ))}
              </Stack>
              <Paper
                p="lg"
                radius={layout.cardRadius}
                bg={palette.surface}
                style={{ border: `1px solid ${palette.border}` }}
              >
                <Stack gap="xs">
                  <Text fw={600}>Naša obećanja</Text>
                  {content.aboutPromises.map((item) => (
                    <Text key={item} size="sm" c={palette.muted}>
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Paper>
            </SimpleGrid>
          )}
          {layout.aboutLayout === "plain" && (
            <Stack gap="sm">
              {content.aboutHighlights.map((item) => (
                <Text key={item} fw={500} c={palette.muted}>
                  {item}
                </Text>
              ))}
            </Stack>
          )}
          {layout.aboutLayout === "cards" && (
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {content.aboutHighlights.map((item) => (
                <Paper
                  key={item}
                  p="lg"
                  radius={layout.cardRadius}
                  bg={palette.surface}
                  style={{
                    border: `1px solid ${palette.border}`,
                    boxShadow: layout.cardShadow,
                  }}
                >
                  <Text fw={600}>{item}</Text>
                  <Text size="sm" c={palette.muted} mt="xs">
                    {content.aboutSupportText}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </SectionContainer>
    </Box>
  );
}

function PricingSection({ palette, layout, content }) {
  return (
    <Box
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("pricing") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout}>{content.pricingTitle}</SectionHeading>
          {layout.pricingLayout === "cards" && (
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {content.pricingPlans.map((plan) => (
                <Paper
                  key={plan.name}
                  p="xl"
                  radius={layout.cardRadius}
                  bg={palette.surface}
                  style={{
                    border: `1px solid ${palette.border}`,
                    boxShadow: layout.cardShadow,
                  }}
                >
                  <Stack gap="xs">
                    <Text fw={700}>{plan.name}</Text>
                    <Title order={3} c={palette.accent}>
                      {plan.price}
                    </Title>
                    <Text size="sm" c={palette.muted}>
                      {plan.desc}
                    </Text>
                    <Button
                      variant={layout.secondaryButtonVariant}
                      color="brand"
                      radius={layout.buttonRadius}
                      mt="sm"
                    >
                      Odaberi paket
                    </Button>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          )}
          {layout.pricingLayout === "list" && (
            <Stack gap="md">
              {content.pricingPlans.map((plan) => (
                <Paper
                  key={plan.name}
                  p="md"
                  radius={layout.cardRadius}
                  bg={palette.surface}
                  style={{ border: `1px solid ${palette.border}` }}
                >
                  <Group justify="space-between" align="center">
                    <Box>
                      <Text fw={600}>{plan.name}</Text>
                      <Text size="sm" c={palette.muted}>
                        {plan.desc}
                      </Text>
                    </Box>
                    <Text fw={700} c={palette.accent}>
                      {plan.price}
                    </Text>
                  </Group>
                </Paper>
              ))}
            </Stack>
          )}
          {layout.pricingLayout === "table" && (
            <Stack gap="sm">
              {content.pricingPlans.map((plan, index) => (
                <Box key={plan.name}>
                  <Group justify="space-between" align="center">
                    <Box>
                      <Text fw={600}>{plan.name}</Text>
                      <Text size="sm" c={palette.muted}>
                        {plan.desc}
                      </Text>
                    </Box>
                    <Text fw={700} c={palette.accent}>
                      {plan.price}
                    </Text>
                  </Group>
                  {index !== content.pricingPlans.length - 1 && (
                    <Divider my="sm" color={palette.border} />
                  )}
                </Box>
              ))}
            </Stack>
          )}
        </Stack>
      </SectionContainer>
    </Box>
  );
}

function ContactSection({ palette, layout, content }) {
  return (
    <Box
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("contact") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Stack gap="md">
            <SectionHeading layout={layout}>{content.contactTitle}</SectionHeading>
            <Text size="lg" c={palette.muted}>
              {content.contactText}
            </Text>
            <Text size="sm" c={palette.muted}>
              Ovaj obrazac je demonstracijski i ne šalje podatke.
            </Text>
          </Stack>
          {layout.contactLayout === "boxed" ? (
            <Paper
              p="xl"
              radius={layout.cardRadius}
              bg={palette.surface}
              style={{ border: `1px solid ${palette.border}`, boxShadow: layout.cardShadow }}
            >
              <Stack>
                <TextInput label="Ime" placeholder="Vaše ime" />
                <TextInput label="Email" placeholder="ime@domena.com" />
                <Textarea label="Poruka" placeholder="Opišite svoj događaj..." minRows={4} />
                <Button color="brand" variant={layout.buttonVariant} radius={layout.buttonRadius}>
                  Pošalji upit
                </Button>
              </Stack>
            </Paper>
          ) : (
            <Stack>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                <TextInput label="Ime" placeholder="Vaše ime" />
                <TextInput label="Email" placeholder="ime@domena.com" />
              </SimpleGrid>
              <Textarea label="Poruka" placeholder="Opišite svoj događaj..." minRows={4} />
              <Group justify="flex-start">
                <Button color="brand" variant={layout.buttonVariant} radius={layout.buttonRadius}>
                  Pošalji upit
                </Button>
              </Group>
            </Stack>
          )}
        </SimpleGrid>
      </SectionContainer>
    </Box>
  );
}

export function ShowcasePage({ showcase }) {
  const { theme, palette, content, layout } = showcase;
  const sectionOrder = layout.sectionOrder;

  return (
    <MantineProvider theme={theme}>
      <Box
        style={{
          minHeight: "100%",
          backgroundColor: palette.background,
          color: palette.text,
        }}
      >
        <ShowcaseHeader palette={palette} layout={layout} content={content} />
        {sectionOrder.map((section, index) => {
          const sectionMap = {
            hero: <HeroSection key="hero" palette={palette} layout={layout} content={content} />,
            features: (
              <FeaturesSection key="features" palette={palette} layout={layout} content={content} />
            ),
            about: <AboutSection key="about" palette={palette} layout={layout} content={content} />,
            pricing: (
              <PricingSection key="pricing" palette={palette} layout={layout} content={content} />
            ),
            contact: (
              <ContactSection key="contact" palette={palette} layout={layout} content={content} />
            ),
          };

          const sectionElement = sectionMap[section];
          if (!sectionElement) return null;

          return (
            <Box key={`${section}-${index}`}>
              {sectionElement}
              {layout.showDividers && section !== sectionOrder[sectionOrder.length - 1] && (
                <Divider color={palette.border} />
              )}
            </Box>
          );
        })}
      </Box>
    </MantineProvider>
  );
}

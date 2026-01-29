import Image from "next/image";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Burger,
  Collapse,
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
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

function SectionContainer({ layout, children, fullWidth, isMobile }) {
  const sectionPadding = isMobile
    ? Math.max(24, Math.round(layout.sectionPadding * 0.5))
    : layout.sectionPadding;
  const contentWidth = isMobile ? Math.min(layout.contentWidth, 520) : layout.contentWidth;

  return (
    <Box
      px={sectionPadding}
      style={{
        maxWidth: fullWidth ? "100%" : contentWidth,
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
}

function SectionHeading({ children, layout, order = 2, isMobile }) {
  return (
    <Title
      order={isMobile ? Math.max(3, order) : order}
      tt={layout.headingCaps ? "uppercase" : "none"}
      fw={layout.headingWeight}
      style={{
        letterSpacing: layout.headingLetterSpacing,
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {children}
    </Title>
  );
}

function ShowcaseHeader({ palette, layout, content, isMobile }) {
  const [opened, { toggle }] = useDisclosure(false);
  const navTargets = {
    "O nama": "about",
    Cjenik: "pricing",
    "Kontaktiraj nas": "contact",
  };

  return (
    <Box
      px={isMobile ? 20 : layout.sectionPadding}
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
            size={isMobile ? "sm" : "xs"}
            style={{ letterSpacing: layout.taglineLetterSpacing }}
          >
            {content.tagline}
          </Text>
          <Title order={3} fw={layout.logoWeight}>
            Showcase Studio
          </Title>
        </Stack>
        {isMobile ? (
          <Burger opened={opened} onClick={toggle} size="sm" aria-label="Toggle navigation" />
        ) : (
          <Group gap="lg">
            {content.nav.map((item) => (
              <Anchor
                key={item}
                href={navTargets[item] ? `#${navTargets[item]}` : "#"}
                underline="never"
                c={palette.text}
                fw={500}
              >
                {item}
              </Anchor>
            ))}
          </Group>
        )}
      </Group>
      {isMobile && (
        <Collapse in={opened}>
          <Stack mt="md" gap="sm" align="center">
            {content.nav.map((item) => (
              <Anchor
                key={item}
                href={navTargets[item] ? `#${navTargets[item]}` : "#"}
                underline="never"
                c={palette.text}
                fw={600}
                size="md"
              >
                {item}
              </Anchor>
            ))}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
}

function ImagePlaceholder({
  palette,
  layout,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  isMobile,
}) {
  const maxWidth = imageWidth ?? layout.placeholderWidth ?? layout.contentWidth;
  const maxHeight = imageHeight ?? layout.placeholderHeight;
  const sizes = imageWidth ? `${imageWidth}px` : "(max-width: 768px) 90vw, 50vw";
  const containerWidth = imageWidth ?? "100%";
  const containerHeight = imageHeight ?? layout.placeholderHeight;

  return (
    <Box
      style={{
        width: containerWidth,
        height: containerHeight,
        maxWidth: isMobile ? "100%" : maxWidth,
        maxHeight: isMobile ? Math.min(containerHeight, 260) : maxHeight,
        margin: "0 auto",
        borderRadius: layout.imageRadius,
        border: `1px solid ${palette.border}`,
        background: layout.placeholderGradient || palette.heroGradient,
        boxShadow: layout.imageShadow,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {imageSrc ? (
        <Box
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
          }}
        >
          <Box
            style={{
              width: "100%",
              height: "100%",
              maxWidth: isMobile ? "100%" : maxWidth,
              maxHeight: isMobile ? "100%" : maxHeight,
              position: "relative",
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth || 800}
              height={imageHeight || 600}
              sizes={sizes}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: imageWidth,
                maxHeight: imageHeight,
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            position: "absolute",
            inset: "12%",
            borderRadius: layout.imageRadius,
            border: `1px dashed ${palette.accentSoft}`,
            opacity: 0.8,
          }}
        />
      )}
    </Box>
  );
}

function HeroSection({ palette, layout, content, isMobile }) {
  const heroTitleSize = isMobile ? Math.min(layout.heroTitleSize, 36) : layout.heroTitleSize;
  const heroLayout = layout.heroLayout;
  const heroBackground = heroLayout === "full" ? palette.heroGradient : "transparent";

  return (
    <Box
      py={isMobile ? Math.max(32, Math.round(layout.heroPadding * 0.6)) : layout.heroPadding}
      style={{
        background: heroBackground,
        borderTop: layout.heroBorder ? `1px solid ${palette.border}` : "none",
        borderBottom: layout.heroBorder ? `1px solid ${palette.border}` : "none",
      }}
    >
      <SectionContainer layout={layout} fullWidth={heroLayout === "full"} isMobile={isMobile}>
        {heroLayout === "centered" && (
          <Stack
            gap={isMobile ? 18 : 24}
            align="center"
            ta="center"
            maw={720}
            mx="auto"
          >
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
            <Text c={palette.muted} size={isMobile ? "md" : layout.heroTextSize}>
              {content.heroText}
            </Text>
            <Group>
              <Button
                color="brand"
                size="md"
                radius={layout.buttonRadius}
                variant={layout.buttonVariant}
                fullWidth={isMobile}
              >
                {content.heroCta}
              </Button>
              {layout.showSecondaryCta && (
                <Button
                  variant={layout.secondaryButtonVariant}
                  size="md"
                  radius={layout.buttonRadius}
                  fullWidth={isMobile}
                >
                  Pogledaj detalje
                </Button>
              )}
            </Group>
            {layout.showPlaceholder && content.image && (
              <ImagePlaceholder
                palette={palette}
                layout={layout}
                imageSrc={content.image}
                imageAlt={content.imageAlt || content.heroTitle}
                imageWidth={content.imageWidth}
                imageHeight={content.imageHeight}
                isMobile={isMobile}
              />
            )}
          </Stack>
        )}

        {heroLayout === "split" && (
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Stack gap={20} maw={640} align={isMobile ? "center" : "stretch"} ta={isMobile ? "center" : "left"}>
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
              <Text c={palette.muted} size={isMobile ? "md" : layout.heroTextSize}>
                {content.heroText}
              </Text>
              <Group justify={isMobile ? "center" : "flex-start"}>
                <Button
                  color="brand"
                  size="md"
                  radius={layout.buttonRadius}
                  variant={layout.buttonVariant}
                  fullWidth={isMobile}
                >
                  {content.heroCta}
                </Button>
                {layout.showSecondaryCta && (
                  <Button
                    variant={layout.secondaryButtonVariant}
                    size="md"
                    radius={layout.buttonRadius}
                    fullWidth={isMobile}
                  >
                    Pogledaj detalje
                  </Button>
                )}
              </Group>
            </Stack>
            {layout.showPlaceholder && (
              <ImagePlaceholder
                palette={palette}
                layout={layout}
                imageSrc={content.image}
                imageAlt={content.imageAlt || content.heroTitle}
                imageWidth={content.imageWidth}
                imageHeight={content.imageHeight}
                isMobile={isMobile}
              />
            )}
          </SimpleGrid>
        )}

        {heroLayout === "full" && (
          <Stack gap={28} maw={740} align={isMobile ? "center" : "stretch"} ta={isMobile ? "center" : "left"}>
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
            <Text c={palette.muted} size={isMobile ? "md" : layout.heroTextSize}>
              {content.heroText}
            </Text>
            <Group justify={isMobile ? "center" : "flex-start"}>
              <Button
                color="brand"
                size="md"
                radius={layout.buttonRadius}
                variant={layout.buttonVariant}
                fullWidth={isMobile}
              >
                {content.heroCta}
              </Button>
              {layout.showSecondaryCta && (
                <Button
                  variant={layout.secondaryButtonVariant}
                  size="md"
                  radius={layout.buttonRadius}
                  fullWidth={isMobile}
                >
                  Pogledaj detalje
                </Button>
              )}
            </Group>
            {layout.showPlaceholder && (
              <ImagePlaceholder
                palette={palette}
                layout={layout}
                imageSrc={content.image}
                imageAlt={content.imageAlt || content.heroTitle}
                imageWidth={content.imageWidth}
                imageHeight={content.imageHeight}
                isMobile={isMobile}
              />
            )}
          </Stack>
        )}
      </SectionContainer>
    </Box>
  );
}

function FeaturesSection({ palette, layout, content, isMobile }) {
  if (!content.features || content.features.length === 0) return null;
  const isList = layout.featuresLayout === "list";

  return (
    <Box
      id="features"
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("features") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout} isMobile={isMobile}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout} isMobile={isMobile}>
            {content.featuresTitle}
          </SectionHeading>
          {isList ? (
            <Stack gap="md">
              {content.features.map((feature) => (
                <Group key={feature.title} align="flex-start" gap="md" justify={isMobile ? "center" : "flex-start"}>
                  {layout.featuresWithIcons && (
                    <ThemeIcon variant="light" color="brand" radius={layout.buttonRadius}>
                      <Text fw={700} size="sm">
                        {feature.icon}
                      </Text>
                    </ThemeIcon>
                  )}
                  <Box>
                    <Text fw={600} ta={isMobile ? "center" : "left"}>
                      {feature.title}
                    </Text>
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

function AboutSection({ palette, layout, content, isMobile }) {
  if (layout.aboutLayout === "library") {
    return (
      <Box
        id="about"
        py={layout.sectionPadding}
        style={{
          background: layout.sectionBackgrounds.includes("about") ? palette.surfaceAlt : "transparent",
        }}
      >
        <SectionContainer layout={layout} fullWidth isMobile={isMobile}>
          <Stack gap={layout.sectionGap}>
            <SectionHeading layout={layout} isMobile={isMobile}>
              {content.aboutTitle}
            </SectionHeading>
            <Text size={isMobile ? "md" : "lg"} c={palette.muted} maw={800} ta={isMobile ? "center" : "left"}>
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
      id="about"
      py={layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("about") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout} isMobile={isMobile}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout} isMobile={isMobile}>
            {content.aboutTitle}
          </SectionHeading>
          <Text size={isMobile ? "md" : "lg"} c={palette.muted} maw={720} ta={isMobile ? "center" : "left"}>
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
                    <Text fw={600} ta={isMobile ? "center" : "left"}>
                      {item}
                    </Text>
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
                <Text key={item} fw={500} c={palette.muted} ta={isMobile ? "center" : "left"}>
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
                  <Text fw={600} ta={isMobile ? "center" : "left"}>
                    {item}
                  </Text>
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

function PricingSection({ palette, layout, content, isMobile }) {
  return (
    <Box
      id="pricing"
      py={isMobile ? Math.max(24, Math.round(layout.sectionPadding * 0.5)) : layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("pricing") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout} isMobile={isMobile}>
        <Stack gap={layout.sectionGap}>
          <SectionHeading layout={layout} isMobile={isMobile}>
            {content.pricingTitle}
          </SectionHeading>
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
                    <Text fw={700} ta={isMobile ? "center" : "left"}>
                      {plan.name}
                    </Text>
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
                      fullWidth={isMobile}
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

function ContactSection({ palette, layout, content, isMobile }) {
  return (
    <Box
      id="contact"
      py={isMobile ? Math.max(24, Math.round(layout.sectionPadding * 0.5)) : layout.sectionPadding}
      style={{
        background: layout.sectionBackgrounds.includes("contact") ? palette.surfaceAlt : "transparent",
      }}
    >
      <SectionContainer layout={layout} isMobile={isMobile}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Stack gap="md" align={isMobile ? "center" : "stretch"}>
            <SectionHeading layout={layout} isMobile={isMobile}>
              {content.contactTitle}
            </SectionHeading>
            <Text size={isMobile ? "md" : "lg"} c={palette.muted} ta={isMobile ? "center" : "left"}>
              {content.contactText}
            </Text>
            <Text size="sm" c={palette.muted} ta={isMobile ? "center" : "left"}>
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
              <Stack gap={isMobile ? "md" : "sm"}>
                <TextInput label="Ime" placeholder="Vaše ime" />
                <TextInput label="Email" placeholder="ime@domena.com" />
                <Textarea label="Poruka" placeholder="Opišite svoj događaj..." minRows={4} />
                <Button
                  color="brand"
                  variant={layout.buttonVariant}
                  radius={layout.buttonRadius}
                  fullWidth={isMobile}
                >
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
              <Group justify={isMobile ? "center" : "flex-start"}>
                <Button
                  color="brand"
                  variant={layout.buttonVariant}
                  radius={layout.buttonRadius}
                  fullWidth={isMobile}
                >
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <MantineProvider theme={theme}>
      <Box
        style={{
          minHeight: "100%",
          backgroundColor: palette.background,
          color: palette.text,
        }}
      >
        <ShowcaseHeader palette={palette} layout={layout} content={content} isMobile={isMobile} />
        {sectionOrder.map((section, index) => {
          const sectionMap = {
            hero: (
              <HeroSection
                key="hero"
                palette={palette}
                layout={layout}
                content={content}
                isMobile={isMobile}
              />
            ),
            features: (
              <FeaturesSection
                key="features"
                palette={palette}
                layout={layout}
                content={content}
                isMobile={isMobile}
              />
            ),
            about: (
              <AboutSection
                key="about"
                palette={palette}
                layout={layout}
                content={content}
                isMobile={isMobile}
              />
            ),
            pricing: (
              <PricingSection
                key="pricing"
                palette={palette}
                layout={layout}
                content={content}
                isMobile={isMobile}
              />
            ),
            contact: (
              <ContactSection
                key="contact"
                palette={palette}
                layout={layout}
                content={content}
                isMobile={isMobile}
              />
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

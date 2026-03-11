"use client";

import { useState } from "react";
import {
  Paper,
  Stack,
  TextInput,
  Textarea,
  Select,
  Button,
  Title,
  Text,
} from "@mantine/core";

const BUSINESS_TYPES_HR = [
  { value: "restaurant", label: "Restoran / ugostiteljstvo" },
  { value: "events", label: "Događaji / vjenčanja" },
  { value: "retail", label: "Trgovina / salon" },
  { value: "gaming", label: "Gaming / esport" },
  { value: "business", label: "Tvrtka / korporacija" },
  { value: "portfolio", label: "Portfolio / kreativno" },
  { value: "other", label: "Ostalo" },
];

export function ContactForm({ showcaseOptions }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState(null);
  const [showcaseLike, setShowcaseLike] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, businessType, showcaseLike, message });
  };

  return (
    <Paper
      className="glass-panel"
      p={{ base: "md", sm: "xl" }}
      radius="xl"
      shadow="xl"
      style={{
        maxWidth: 600,
        margin: "0 auto",
        background: "rgba(15, 23, 42, 0.85)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Stack gap="md">
        <div>
          <Title order={3} ta="center" c="white">
            Zatražite web stranicu
          </Title>
          <Text size="sm" c="gray.4" ta="center" mt={4}>
            Showcase Studio – pošaljite upit i javit ćemo vam se.
          </Text>
        </div>

        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Ime"
              placeholder="Vaše ime"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              radius="md"
            />
            <TextInput
              label="Email"
              type="email"
              placeholder="vas@primjer.hr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              radius="md"
            />
            <Select
              label="Vrsta poslovanja"
              placeholder="Odaberite vrstu"
              data={BUSINESS_TYPES_HR}
              value={businessType}
              onChange={setBusinessType}
              radius="md"
            />
            <Select
              label="Koji vam se predložak sviđa?"
              placeholder="Odaberite stil"
              data={showcaseOptions}
              value={showcaseLike}
              onChange={setShowcaseLike}
              radius="md"
            />
            <Textarea
              label="Poruka"
              placeholder="Opišite vaš projekt..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              minRows={4}
              radius="md"
            />
            <Button
              type="submit"
              size="md"
              radius="xl"
              fullWidth
              variant="gradient"
              gradient={{ from: "blue.6", to: "cyan.5" }}
              style={{ minHeight: 48 }}
            >
              Pošalji upit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}

import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Showcase predlošci",
  description: "One-page showcase predložaka za različite industrije.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

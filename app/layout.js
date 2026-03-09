import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { SidebarLayout } from "../components/SidebarLayout";

const theme = createTheme({
  primaryColor: "blue",
  defaultRadius: "md",
});

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
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <SidebarLayout>{children}</SidebarLayout>
        </MantineProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const inter = Inter({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ordr",
  description:
    "Race to determine the correct order of numbers hidden behind shuffled cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

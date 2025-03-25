import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme_provider"

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusCore",
  description: "Bienvenido a mi ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanistSans.variable} antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}

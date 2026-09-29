import type { Metadata } from "next";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 16 + Sanity Stack",
  description: "Next.js 16, React 19, Tailwind CSS 4, Framer Motion, styled-components, Sanity 5.26, Nodemailer, React Email",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

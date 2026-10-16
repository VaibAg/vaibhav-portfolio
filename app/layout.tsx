// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Agarwal | Lead & Principal Systems Engineer",
  description:
    "Portfolio of Vaibhav Agarwal: ~8 YoE architecting high-throughput streaming systems, Debezium CDC, and KEDA consumer autoscaling.",
  openGraph: {
    title: "Vaibhav Agarwal - Distributed Systems & Data Platform Architect",
    description:
      "~100× lag reduction, 40% infra cost savings, real-time CDC, and multi-tenant query engines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#090A0F] antialiased`}>
        {children}
      </body>
    </html>
  );
}
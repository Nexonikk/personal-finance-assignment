// app/layout.tsx - Updated with simple SEO
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Dashboard - Track Expenses & Savings",
  description:
    "Manage your money smart! Track expenses, monitor savings goals, and take control of your financial future with our easy-to-use dashboard.",
  keywords:
    "personal finance, expense tracker, budget planner, savings goals, money management, financial dashboard",

  openGraph: {
    title: "Personal Finance Dashboard - Smart Money Management",
    description:
      "Take control of your finances! Track expenses, set savings goals, and achieve financial freedom.",
    url: "https://your-domain.com",
    images: [
      {
        url: "/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Personal Finance Dashboard Interface",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/applogo.png" />
        <meta name="theme-color" content="#22C55E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

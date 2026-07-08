import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harbor",
  description: "A blank family canvas for meals, groceries, schedules, and household rhythm."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

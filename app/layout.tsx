import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptSync — Sync prompts across Claude, ChatGPT, and teams",
  description: "Central hub to manage and sync prompt templates across different AI platforms. Built for AI-heavy startups and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ccc23bb8-8ec5-4584-a19d-6420ade956eb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}

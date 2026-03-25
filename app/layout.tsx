import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

// SEO оптимизация (требование ТЗ п. 4.7)
export const metadata: Metadata = {
  title: "Портфолио | Кузьминых Андрей",
  description: "Персональное портфолио frontend разработчика. Проекты, навыки, контакты.",
  keywords: ["разработчик", "портфолио", "Next.js", "React", "frontend", "Кузьминых Андрей"],
  authors: [{ name: "Кузьминых Андрей" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
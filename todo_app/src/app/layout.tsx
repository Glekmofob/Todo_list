import type { Metadata } from "next";
import "./globals.css"; 
import styles from "./page.module.css"


export const metadata: Metadata = {
  title: "Список дел",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <h1 className={styles.title}>Список задач</h1>
        <div className="container">
          {children} 
        </div>
      </body>
    </html>
  );
}
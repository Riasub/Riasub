import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.PKG Capa Fit",
  description: "S.PKG 제조팀 계획정보 / 설비정보 / 효율정보",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

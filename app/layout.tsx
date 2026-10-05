import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const thai = localFont({
  src: "../node_modules/@fontsource-variable/noto-sans-thai/files/noto-sans-thai-thai-wght-normal.woff2",
  weight: "100 900", style: "normal", display: "swap", variable: "--font-thai", adjustFontFallback: false,
});
const latin = localFont({
  src: "../node_modules/@fontsource-variable/noto-sans-thai/files/noto-sans-thai-latin-wght-normal.woff2",
  weight: "100 900", style: "normal", display: "swap", variable: "--font-latin", adjustFontFallback: false,
});
const outfit = localFont({
  src: "../node_modules/@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2",
  weight: "100 900", style: "normal", display: "swap", variable: "--font-outfit", adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),
  title: "Kriton LtD. | เติมเกมออนไลน์ & บัตรเติมเงิน",
  description: "เติมความสนุกกับ Kriton LtD. สอบถามเติมเกมออนไลน์ บัตรเติมเงิน และโปรโมชันผ่าน LINE OA @901mvpnu หรือโทร 0982341377",
  openGraph: {
    title: "Kriton LtD. | เติมเกมออนไลน์",
    description: "เลือกเกมที่ใช่ แล้วทัก LINE ให้เราดูแล • โทร 0982341377",
    locale: "th_TH", type: "website", images: [{ url: "/images/hero.webp", width: 1920, height: 960, alt: "Kriton LtD. เติมเกมออนไลน์" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#061c49" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th" className={`${thai.variable} ${latin.variable} ${outfit.variable}`}><body>{children}</body></html>;
}

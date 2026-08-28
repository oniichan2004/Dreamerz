import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat , Poppins,Space_Grotesk} from "next/font/google";
import Header from "../components/core/header";
import Footer from "../components/core/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const caveat = Caveat({
  variable: "--font-title",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Dreamerz — the social network for dreams",
    template: "%s · Dreamerz",
  },
};

export const viewport: Viewport = {
  themeColor: "#17142c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

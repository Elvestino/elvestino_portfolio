import type { Metadata } from "next";
import "./globals.css";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import PageTransition from "./components/PageTransition";
import StarTransition from "./components/StarTransition";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: {
    default: "Portfolio || Elvestino",
    template: "%s | Elvestino",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Rejoignez l'Elvestino, une communauté d'entrepreneurs et de traders passionnés",
  keywords: ["elvestino", "tsianoy karl elvestino dorelin", "dorelin"],
  authors: [{ name: "Elvestino" }],
  creator: "Elvestino",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Elvestino",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col bg-zinc-950 font-sans text-white"
        style={{ margin: 0, padding: 0 }}
      >
        <Header />
        {/* Particles en arrière-plan */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <ParticlesBackground />
        </div>

        {/* Contenu principal */}
        <main className="flex-1 relative isolate">
          <StarTransition />
          {/* <div className="relative w-full min-h-full z-10">{children}</div> */}
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}

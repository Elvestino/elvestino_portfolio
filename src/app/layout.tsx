import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import PageTransition from "./components/PageTransition";
import StarTransition from "./components/StarTransition";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Arrow from "./components/Arrow";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins", // Nom de la variable CSS
});

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
    "Elvestino, Developpeur FrontEnd, spécialisé en NextJS, Designeur avec Figma et Analyseur de Données avec PowerBI Découvrez mes projets et compétences en développement web, designeur et data Analyst.",
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
        className={`${poppins.className} antialiased min-h-screen flex flex-col text-white overflow-x-hidden`}
      >
        <div className="w-full mx-auto ">
          <Header />

          {/* Particles en arrière-plan */}
          <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <ParticlesBackground />
          </div>

          {/* Contenu principal */}
          <main className="flex-1 relative isolate overflow-hidden">
            <StarTransition />
            <PageTransition>{children}</PageTransition>
            <Arrow />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

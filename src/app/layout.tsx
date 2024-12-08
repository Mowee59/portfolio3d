
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Aniss Mahfoudi | Concepteur Développeur",
  description:
    "Portfolio d'Aniss Mahfoudi, Concepteur Développeur basé à Lille.",
  keywords: [
    "développeur web",
    "développeur frontend",
    "développeur react",
    "développeur next.js",
    "concepteur développeur",
    "developpeur fullstack",
    "developpeur backend",
    "developpeur mobile",
    "NestJs",
    "Angular",
    "lille",
    "france",
    "portfolio",
  ],
  authors: [{ name: "Aniss Mahfoudi" }],
  creator: "Aniss Mahfoudi",
  publisher: "Aniss Mahfoudi",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aniss.dev",
    title: "Aniss Mahfoudi | Développeur Web",
    description:
      "Portfolio d'Aniss Mahfoudi, Concepteur Développeur basé à Lille.",
    siteName: "Aniss Mahfoudi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniss Mahfoudi | Concepteur Développeur",
    description:
      "Portfolio d'Aniss Mahfoudi, Concepteur Développeur basé à Lille.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

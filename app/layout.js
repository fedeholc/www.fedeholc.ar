import "./globals.css";
import { Archivo_Black } from "next/font/google";

export const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});

export const metadata = {
  title: "Federico Holc",
  description: "Sitio web de Federico Holc",
  icons: {
    icon: "/fedeico.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivoBlack.variable}>
      <body>{children}</body>
    </html>
  );
}

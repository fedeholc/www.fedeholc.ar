import "./globals.css";
import { Archivo_Black, Roboto_Mono, Recursive } from "next/font/google";

export const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});
export const robotoMono = Roboto_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
export const recursive = Recursive({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
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

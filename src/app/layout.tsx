import type { Metadata } from "next";
import "./globals.css";
// criar a fonte da app
import {Montserrat} from 'next/font/google'


// iniciar a fonte
const font = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "Versão mais básica do e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      // coloca a variavel da fonte dentro dos colchetes
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}

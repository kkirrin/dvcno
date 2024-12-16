import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';
import "./globals.css";

import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext'],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const BebasNeue = localFont({
  src: "./fonts/BebasNeue.ttf",
  variable: '--second-family',
  weight: "100 900",
});

export const metadata = {
  title: "ДВЦНО",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} ${BebasNeue.variable} footer-sticky`}>
        <div className="container">
          <Header />
        </div>
        <main>
          {children}
        </main >
        <Footer />
      </body>
    </html>
  );
}

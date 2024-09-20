import localFont from "next/font/local";
import Fotter from "./Components/Fotter/page";
import Header from "./Components/Header/page";
import Search from "./Components/Search/page";
import "./globals.css";
import { Providers } from "./Store/Provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "npm | Home",
  description: "npm home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <Search />
          {children}
          <Fotter />
        </Providers>
      </body>
    </html>
  );
}

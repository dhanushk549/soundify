import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './Compon/Header'

import Home from "./page";
import { SparklesCore } from "./components/ui/sparkles";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "soundify",
  description: "'MusicWeb lets you stream songs, create playlists, and explore new artists.'",
  keywords:[  "musicweb",
    "music website",
    "music streaming",
    "online music player",
    "discover new artists",
    "music playlists",
    "top songs",
    "music platform",
    "digital music library",
    "free music",
    "layout" ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><SparklesCore className=" absolute z-10 " />
        <Header />
        {children} 
        

      </body>
    </html>
  );

}
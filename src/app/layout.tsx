import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dbConnection from "@/lib/firebase";
import { Space_Grotesk } from '@next/font/google';
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

dbConnection()

const inter = Inter( { subsets: [ "latin" ] } );

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});


const theme = createTheme({
 
});


export const metadata: Metadata = {
  title: "3D Hitech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={ `${spaceGrotesk.className } custom-scrollbar`}>
        <MantineProvider theme={ theme }>
           { children }
        </MantineProvider>
       
      </body>
    </html>
  );
}

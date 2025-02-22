import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from 'next/font/google';
import Script from "next/script";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'], // Include both normal and italic styles
});


export const metadata: Metadata = {
  title: "ZaikoTech DigiCard",
  icons: {
    icon: '/favicon.ico', 
  },
  description: "zaiko tech digital business cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-PGBNKPRKWR"></Script>
<script>
{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PGBNKPRKWR');`}
</script>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}

import "../styles/globals.css";
import type { Metadata } from 'next';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: 'dealwithsign.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

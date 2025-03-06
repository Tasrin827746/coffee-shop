import Footer from "@/components/CommonLayout/Footer";
import Navbar from "@/components/CommonLayout/Navbar";
import "@/styles/global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

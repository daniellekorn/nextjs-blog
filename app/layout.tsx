import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Danielle Korn",
  description: "Tech insight for modern moms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

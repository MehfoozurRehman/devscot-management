import "./globals.css";

import { Inter } from "next/font/google";
import dbConnect from "@/lib/dbConnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devscot Management",
  description: "Devscot Management System",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

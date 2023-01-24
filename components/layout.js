import Header from "../components/Header";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main className={inter.className}>{children}</main>
    </>
  );
}

import Header from "./Header";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
    </>
  );
}

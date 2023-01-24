import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import { useEffect, useState } from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SSRProvider>
  );
}

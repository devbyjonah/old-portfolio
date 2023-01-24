import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import Layout from "../components/layout";

import { useState } from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

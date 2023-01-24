import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import Layout from "../components/layout";
import { DarkModeProvider } from "../context/DarkModeContext";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </SSRProvider>
  );
}

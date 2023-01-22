import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

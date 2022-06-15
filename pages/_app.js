import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";

import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
         <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

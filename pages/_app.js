import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";

import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <motion.main
          key={router.route}
          initial={{
            opacity: 0, x: -200, y: 0
          }} // Set the initial state to variants.hidden
          animate={{
            opacity: 1, x: 0, y: 0
          }} // Animated state to variants.enter
          exit={{
            opacity: 0, x: 0, y: -100
          }} // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
        >
         <Component {...pageProps} />
        </motion.main>
      </Layout>
    </>
  )
}

export default MyApp

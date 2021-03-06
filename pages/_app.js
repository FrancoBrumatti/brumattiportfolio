import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
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

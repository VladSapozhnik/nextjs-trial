import '@/styles/globals.scss'
import Head from 'next/head'
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
      <Layout>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                      <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap" rel="stylesheet" />
          </Head>
        <Component {...pageProps} />
      </Layout>
  )
}

export default App;

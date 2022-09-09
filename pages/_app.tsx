import '@fontsource/poppins/400.css';
import "@fontsource/fira-code/400.css"

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";  
import Layout from '../components/layouts/layout';
import theme from '../styles/theme'
import Main from './main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Main/>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

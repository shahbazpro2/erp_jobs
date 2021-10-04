import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NoSsr, ThemeProvider } from '@mui/material'
import NProgress from 'nprogress'
import theme from '../theme'
import { Provider } from 'react-redux'
import { store } from '../redux/Store'
import Head from 'next/head'
import GetUserWrapper from '@components/wrappers/GetUserWrapper'
import ApolloWrapper from '@components/wrappers/ApolloWrapper'
import HeaderFooterWrapper from '@components/wrappers/HeaderFooterWrapper'
import Router from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  // NProgress configuration and setup
  NProgress.configure({ easing: 'ease', showSpinner: false });

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())


  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
      />
    </Head>

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <GetUserWrapper>
            <ApolloWrapper>
              <HeaderFooterWrapper>
                <Component {...pageProps} />
              </HeaderFooterWrapper>
            </ApolloWrapper>
          </GetUserWrapper>
        </NoSsr>
      </ThemeProvider>
    </Provider>
  </>
}
export default MyApp

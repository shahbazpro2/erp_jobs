import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NoSsr, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { Provider } from 'react-redux'
import { store } from '../redux/Store'
import IsUserWrapper from '../components/wrappers/RouteWrapper'
import GetUserWrapper from '@components/wrappers/GetUserWrapper'
import RouteWrapper from '../components/wrappers/RouteWrapper'
import ApolloWrapper from '@components/wrappers/ApolloWrapper'


function MyApp({ Component, pageProps }: AppProps) {


  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NoSsr>
        <GetUserWrapper>
          <ApolloWrapper>
            <Component {...pageProps} />
          </ApolloWrapper>
        </GetUserWrapper>
      </NoSsr>
    </ThemeProvider>
  </Provider>
}
export default MyApp

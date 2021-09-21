import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NoSsr, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { Provider } from 'react-redux'
import { store } from '../redux/Store'
import IsUserWrapper from '../components/IsUserWrapper'


function MyApp({ Component, pageProps }: AppProps) {


  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NoSsr>
        <IsUserWrapper>
          <Component {...pageProps} />
        </IsUserWrapper>
      </NoSsr>
    </ThemeProvider>
  </Provider>
}
export default MyApp

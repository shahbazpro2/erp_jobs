import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NoSsr, ThemeProvider } from '@mui/material'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <NoSsr>
      <Component {...pageProps} />
    </NoSsr>
  </ThemeProvider>
}
export default MyApp

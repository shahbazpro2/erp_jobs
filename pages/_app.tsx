import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NoSsr, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { Provider } from 'react-redux'
import { store } from '../redux/Store'
import IsUserWrapper from '../components/IsUserWrapper'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

function MyApp({ Component, pageProps, router }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://10.104.45.78:8000/graphql',
    cache: new InMemoryCache()
  });

  return <Provider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <IsUserWrapper>

            <Component {...pageProps} />

          </IsUserWrapper>
        </NoSsr>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>
}
export default MyApp

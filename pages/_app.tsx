import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { CircularProgress, NoSsr, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { useEffect, useState } from 'react'
import { getUserApi } from '../api/auth'
import { isLoggedInRoute, isProtectedRoute } from '../components/functions/paths'
import { Box } from '@mui/system'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser()
  }, [router])

  const getUser = async () => {
    const res = await getUserApi()
    if (isProtectedRoute(router) && res?.error) {
      router.push('/login/user/')
    } else if (isLoggedInRoute(router) && !res?.error) {
      router.push('/')
    }

    setTimeout(() => {
      setLoading(false)
    }, 500);



    console.log('getUser', res, isProtectedRoute(router))
  }

  return <ThemeProvider theme={theme}>
    <NoSsr>
      {loading ? <Box className="flex justify-center items-center h-[100vh]" sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> :
        <Component {...pageProps} />
      }
    </NoSsr>
  </ThemeProvider>
}
export default MyApp

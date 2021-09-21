import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useRouter, NextRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { getUserApi } from '../api/auth'
import { useAppDispatch } from '../redux/Store'
import Spinner from './common/spinner/Spinner'
import { isLoggedInRoute, isProtectedRoute } from './functions/paths'

interface Props {
  children: ReactNode
}

const IsUserWrapper = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState()

  const httpLink = createHttpLink({
    uri: 'http://10.104.45.78:8000/graphql',
  });

  const authLink = setContext((_, { headers }) => {

    return {
      headers: {
        ...headers,
        authorization: token ? `Token ${token}` : "",
      }
    }
  });


  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  useEffect(() => {
    getUser(router)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const getUser = async (router: NextRouter) => {
    const { payload }: any = await dispatch(getUserApi())
    if (!payload.error) {
      let token: any = localStorage.getItem('token')
      if (token) {
        token = JSON.parse(token)
        setToken(token.token)
      }
    }
    if (isProtectedRoute(router) && payload?.error) {
      router.push('/login/user/')
    } else if (isLoggedInRoute(router) && !payload?.error) {
      router.push('/')
    } else {
      setLoading(false)
    }

  }

  return (
    <>
      {loading ? <Spinner /> :
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      }
    </>
  )
}

export default IsUserWrapper

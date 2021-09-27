import { ApolloClient, ApolloProvider, createHttpLink, DefaultOptions, InMemoryCache } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context'
import { useRouter, NextRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { getUserApi } from '../api/auth'
import { useAppDispatch } from '../redux/Store'
import Spinner from './common/spinner/Spinner'
import { isLoggedInRoute, isProtectedRoute } from './functions/paths'
import { setGraphqlError } from '@redux/errors';

interface Props {
  children: ReactNode
}

const IsUserWrapper = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState()
  const [error, setError] = useState<string[]>([])

  const httpLink = createHttpLink({
    uri: 'http://10.104.45.78:8000/graphql',
  });


  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    let err: any = []

    if (graphQLErrors) {

      graphQLErrors.forEach(({ message, locations, path }) => {
        err.push(`${message}`)
        if (message.includes("not authenticated")) {
          localStorage.removeItem('token')
          router.push('/login/user/')
        }
      }
      );

    }
    console.log('main', err)

    if (networkError) err.push(`Response not successful`)
    dispatch(setGraphqlError(err))
  });

  const defaultOptions: DefaultOptions = {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }



  const authLink = setContext((_, { headers }) => {

    return {
      headers: {
        ...headers,
        authorization: token ? `Token ${token}` : "",
      }
    }
  });


  const client = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
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

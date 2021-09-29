import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { isGuestRoute, isProtectedRoute } from '../functions/paths'

interface Props {
  children: ReactNode,
  error: boolean
}

const RouteWrapper = ({ children, error }: Props) => {
  const router = useRouter();

  (() => {
    if (isProtectedRoute(router) && error) {
      router.push('/login/user/')
    } else if (isGuestRoute(router) && !error) {
      router.push('/')
    }
  })()


  return (
    <>
      {children}
    </>
  )
}

export default RouteWrapper

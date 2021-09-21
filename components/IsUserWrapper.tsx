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

  useEffect(() => {
    getUser(router)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const getUser = async (router: NextRouter) => {
    const { payload }: any = await dispatch(getUserApi())

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
        children
      }
    </>
  )
}

export default IsUserWrapper

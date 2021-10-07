/* eslint-disable react-hooks/exhaustive-deps */
import { getUserApi } from '@api/auth'
import Spinner from '@components/common/spinner/Spinner'
import { useAppDispatch } from '@redux/Store'
import router from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import RouteWrapper from './RouteWrapper'

interface Props {
    children: ReactNode
}

const GetUserWrapper = ({ children }: Props) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        (async () => {
            const { payload }: any = await dispatch(getUserApi())
            setError(payload.error)
            setLoading(false)
        })()
    }, [router.asPath])




    return (
        <div>
            {loading ? <Spinner /> :
                <RouteWrapper error={error}>
                    {children}
                </RouteWrapper>
            }
        </div>
    )
}

export default GetUserWrapper

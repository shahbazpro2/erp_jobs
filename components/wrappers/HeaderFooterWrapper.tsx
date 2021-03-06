/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '@components/common/footer/Footer'
import EmployerHeader from '@components/common/header/employer/EmployerHeader'
import Header from '@components/common/header/Header'
import { HeaderContext } from '@context/HeaderContext'
import { useAppSelector } from '@redux/Store'
import React, { ReactNode, useEffect, useState } from 'react'


interface Props {
    children: ReactNode
}


const HeaderFooterWrapper = ({ children }: Props) => {
    const auth: any = useAppSelector(state => state.authReducer)
    const [state, setState] = useState({
        bg: 'bg-white',
        boxShadow: 'boxShadow',
        employer: false
    })

    useEffect(() => {
        if (auth.user.type === 'organization') {
            setState({ ...state, employer: true })
        }
    }, [auth.user])

    const ContextValue = {
        bg: state.bg,
        boxShadow: state.boxShadow,
        employer: state.employer,
        handleHeader: (bg: string, boxShadow: string, employer: boolean = false) => {
            setState({ bg, boxShadow, employer })
        }

    }


    return (
        <HeaderContext.Provider value={ContextValue}>
            {state.employer ?
                <EmployerHeader bg={state.bg} boxShadow={state.boxShadow} /> :
                <Header bg={state.bg} boxShadow={state.boxShadow} />
            }
            <div className={`${state.bg.search('transparent') !== -1 ? '' : 'pt-[80px]'}`}>
                {children}
            </div>
            <Footer />
        </HeaderContext.Provider>
    )
}

export default HeaderFooterWrapper

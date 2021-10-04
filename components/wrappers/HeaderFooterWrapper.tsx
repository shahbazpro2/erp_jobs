import Footer from '@components/common/footer/Footer'
import Header from '@components/common/header/Header'
import { HeaderContext } from '@context/HeaderContext'
import React, { ReactNode, useState } from 'react'


interface Props {
    children: ReactNode
}

const HeaderFooterWrapper = ({ children }: Props) => {
    const [state, setState] = useState({
        bg: 'bg-white',
        boxShadow: 'boxShadow'
    })

    const ContextValue = {
        bg: state.bg,
        boxShadow: state.boxShadow,
        handleHeader: (bg: string, boxShadow: string) => {
            setState({ bg, boxShadow })
        }

    }


    return (
        <HeaderContext.Provider value={ContextValue}>
            <Header bg={state.bg} boxShadow={state.boxShadow} />
            <div className="pt-[80px]">
                {children}
            </div>
            <Footer />
        </HeaderContext.Provider>
    )
}

export default HeaderFooterWrapper

import React, { ReactNode } from 'react'
import ContainerPx from './ContainerPx'

interface Props {
    children: ReactNode
}

const ShrinkContainer = ({ children }: Props) => {
    return (
        <ContainerPx>
            <div className="py-16 xl:px-40">
                {children}
            </div>
        </ContainerPx>
    )
}

export default ShrinkContainer

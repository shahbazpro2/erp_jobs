import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const ContainerPx = ({ children }: Props) => {
    return (
        <div className="lg:container px-3 md:mx-auto lg:px-5">
            <div className="px-5 sm:px-10 lg:px-20">
                {children}
            </div>
        </div>
    )
}

export default ContainerPx

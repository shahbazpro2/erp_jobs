import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const Container = ({ children }: Props) => {
    return (
        <div className="container mx-auto px-10">
            {children}
        </div>
    )
}

export default Container

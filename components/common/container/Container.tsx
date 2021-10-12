import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const Container = ({ children }: Props) => {
    return (
        <div className="lg:container px-5 md:mx-auto lg:px-5">
            {children}
        </div>
    )
}

export default Container

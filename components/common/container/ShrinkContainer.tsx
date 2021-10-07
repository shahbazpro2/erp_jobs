import Container from './Container'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const ShrinkContainer = ({ children }: Props) => {
    return (
        <Container>
            <div className="py-10">
                <div className="grid grid-cols-5">
                    <div className="col-start-2 col-span-3">
                        {children}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ShrinkContainer

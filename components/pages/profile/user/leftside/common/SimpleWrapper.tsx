import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { ReactNode } from 'react'



interface Props {
    title: string,
    children: ReactNode
}

const SimpleWrapper = ({ children, title }: Props) => {
    return (
        <BoxWrapper>
            <div className="text-base font-medium">
                {title}
            </div>
            {children}
        </BoxWrapper>
    )
}

export default SimpleWrapper

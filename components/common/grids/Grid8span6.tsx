import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}

const Grid8span6 = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-start-2 col-span-6">
                {children}
            </div>
        </div>
    )
}

export default Grid8span6

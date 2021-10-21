import React from 'react'
import BoxWrapper from '../boxWrapper/BoxWrapper'

interface Props {
    firstClick: () => void,
    secondClick: () => void,
    active: string,
    first: string,
    second: string
}

const DualButton = ({ firstClick, secondClick, active, first, second }: Props) => {
    return (
        <BoxWrapper className="py-2 px-5">
            <div className="flex justify-around">
                <span className={`primary-clr-hover font-bold cursor-pointer ${active === first ? 'active-links' : ''}`} onClick={firstClick}>
                    {first}
                </span>
                <span className="mx-2">
                    |
                </span>
                <span className={`primary-clr-hover font-bold cursor-pointer ${active === second ? 'active-links' : ''}`} onClick={secondClick}>
                    {second}
                </span>
            </div>
        </BoxWrapper>
    )
}

export default DualButton

import React from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LinearProgressWithLabel from '@components/common/linearProgressWithLabel/LinearProgressWithLabel'

const Completion = () => {
    return (
        <BoxWrapper>
            <div className="text-base font-bold">
                Profile Completion
            </div>
            <LinearProgressWithLabel color="success" value={85} />
        </BoxWrapper>
    )
}

export default Completion

import React from 'react'
import WithEditWrapper from './common/WithEditWrapper';

const Summary = () => {


    const onEditHandle = () => {
        console.log('edit')
    }

    return (
        <WithEditWrapper title="Summary" onEditHandle={onEditHandle} >

        </WithEditWrapper>
    )
}

export default Summary

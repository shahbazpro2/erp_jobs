import { Button } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import BoxWrapper from '../boxWrapper/BoxWrapper'
import HeadingStyle1 from '../headerStyles/HeadingStyle1'

interface Props {
    children: React.ReactNode,
    title: string,
    subtitle: string,
    skip?: boolean,
    disabled: boolean,
    onBack: () => void,
    onSkip?: () => void,
    onContinue: () => void
}


const AddItemsWrapper = ({ children, title, subtitle, skip = true, onBack, onSkip, onContinue, disabled }: Props) => {
    return (
        <BoxWrapper>
            <HeadingStyle1 title={title} subtitle={subtitle} />
            {children}
            <Button onClick={onContinue} variant="contained" disabled={disabled} className="w-full" color="primary" disableElevation >
                Continue
            </Button>
            <div className={classNames("mt-5 flex", { 'justify-center': !skip, 'justify-between': skip })}>
                <Button color="secondary" onClick={onBack}>Back</Button>
                {skip && <Button color="secondary" onClick={onSkip}>Skip</Button>}
            </div>
        </BoxWrapper>
    )
}

export default AddItemsWrapper

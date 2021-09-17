import { Button } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import BoxWrapper from '../boxWrapper/BoxWrapper'

interface Props {
    children: React.ReactNode,
    title: string,
    subtitle: string,
    skip?: boolean,
    onBack: () => void,
    onSkip?: () => void,
    onContinue: () => void
}


const AddItemsWrapper = ({ children, title, subtitle, skip = true, onBack, onSkip, onContinue }: Props) => {
    return (
        <BoxWrapper title={title} subtitle={subtitle}>
            {children}
            <Button onClick={onContinue} variant="contained" className="w-full" color="primary" disableElevation >
                Continue
            </Button>
            <div className={classNames("mt-5 flex", { 'justify-center': !skip, 'justify-between': skip })}>
                <Button onClick={onBack}>Back</Button>
                {skip && <Button onClick={onSkip}>Skip</Button>}
            </div>
        </BoxWrapper>
    )
}

export default AddItemsWrapper
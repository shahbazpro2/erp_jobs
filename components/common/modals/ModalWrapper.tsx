import { Modal } from '@mui/material'
import React, { ReactNode, useContext } from 'react'
import { ModalContext } from '../../userAuth/singup/stepper/stepperContent/step2/career/Career';

interface Props {
    children: ReactNode
}

const ModalWrapper = ({ children }: Props) => {
    const context = useContext(ModalContext);
    return (
        <Modal
            keepMounted
            open={context.open}
            closeAfterTransition
            onClose={() => context.handleClose(false)}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <>
                {children}
            </>
        </Modal>
    )
}

export default ModalWrapper

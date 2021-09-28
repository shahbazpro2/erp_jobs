import { Modal } from '@mui/material'
import React, { ReactNode } from 'react'


interface Props {
    open: boolean,
    children: ReactNode
}

const ModalWrapper = ({ children, open }: Props) => {
    return (
        <Modal
            keepMounted
            open={open}
            closeAfterTransition
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

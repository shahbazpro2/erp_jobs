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
            <div className="lg:w-[50%] xl:w-[40%] md:w-[70%] w-[98%] absolute-center">
                {children}
            </div>
        </Modal>
    )
}

export default ModalWrapper

import React, { useContext } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ModalContext } from '../../../context/ModalContext'
interface Props {
    title: string
}
const ModalHeading = ({ title }: Props) => {
    const context = useContext(ModalContext);
    return (
        <div className="flex">
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="close ml-auto cursor-pointer" onClick={context.handleClose}>
                <HighlightOffIcon />
            </div>
        </div>
    )
}

export default ModalHeading

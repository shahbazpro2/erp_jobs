import React, { useContext } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface Props {
    handleClose: () => void,
    title: string
}
const ModalHeading = ({ title, handleClose }: Props) => {

    return (
        <div className="flex">
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="close ml-auto cursor-pointer" onClick={handleClose}>
                <HighlightOffIcon />
            </div>
        </div>
    )
}

export default ModalHeading

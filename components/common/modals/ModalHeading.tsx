import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface Props {
    title: string
}
const ModalHeading = ({ title }: Props) => {
    return (
        <div className="flex">
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="close ml-auto cursor-pointer">
                <HighlightOffIcon />
            </div>
        </div>
    )
}

export default ModalHeading

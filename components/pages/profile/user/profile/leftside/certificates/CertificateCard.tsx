import { Card, CardContent } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CertificateModalContext } from '@context/ModalContext';
import { CertificateQueryProps } from './types';

interface Props {
    data: CertificateQueryProps,
    onDelete: (id: number) => void
}

const CertificateCard = ({ data, onDelete }: Props) => {
    const context = useContext(CertificateModalContext)
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="grid grid-cols-12">
                    <div className="col-span-9">

                        <div className="text-sm">
                            {data.certificate_title}
                            <div className="subtitle-clr">
                                {data.company}
                            </div>
                        </div>

                    </div>
                    <div className="col-span-3">
                        <div className="text-sm flex">
                            <div className="ml-auto text-right">
                                {data.date}
                                <div className="flex mt-3 justify-center text-xs subtitle-clr">
                                    <div className="cursor-pointer mr-3 flex items-center primary-clr-hover" onClick={() => context.handleEdit(data)}>
                                        <EditIcon style={{ width: 16, marginRight: '3px' }} /> Edit
                                    </div>
                                    <div className="cursor-pointer flex items-center hover:text-red-600" onClick={() => onDelete(Number(data.id))}>
                                        <DeleteIcon style={{ width: 16, marginRight: '2px' }} /> Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CertificateCard
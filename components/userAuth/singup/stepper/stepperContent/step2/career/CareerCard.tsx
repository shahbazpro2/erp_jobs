import { Card, CardContent } from '@mui/material'
import React, { Fragment, useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ModalContext } from '@context/ModalContext';
import { CareerQueryProps } from './types';
import stringShort from '@components/functions/stringShort';

interface Props {
    data: CareerQueryProps,
    onDelete: (id: number) => void
}
const CareerCard = ({ data, onDelete }: Props) => {
    const context = useContext(ModalContext)
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="grid grid-cols-12">
                    <div className="col-span-9 pr-2">

                        <div className="text-sm">
                            {data.jobTitle.name}
                            <div className="subtitle-clr">
                                {data.companyName} | {data.companyLocation}
                            </div>
                            <div className="mt-2">
                                {stringShort(data.description)}
                            </div>
                        </div>

                    </div>
                    <div className="col-span-3">
                        <div className="text-sm flex">
                            <div className="ml-auto">
                                {data.fromDate} - {data.currentWorkHere ? 'Present' : data.toDate}
                                {data.confidential && <div className="subtitle-clr">Confidential</div>}
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

export default CareerCard

import { Card, CardContent } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CertificateModalContext } from '@context/ModalContext';
import { CertificateQueryProps } from './types';
import CardContents from '../common/CardContents';

interface Props {
    data: CertificateQueryProps,
    onDelete: (id: number) => void
}

const CertificateCard = ({ data, onDelete }: Props) => {
    const context = useContext(CertificateModalContext)
    return (
        <Card variant="outlined">
            <CardContent>
                <CardContents
                    onEdit={() => context.handleEdit(data)}
                    onDelete={() => onDelete(Number(data.id))}
                    date1={data.end_date}
                >
                    <div className="text-sm">
                        {data.title}
                        <div className="subtitle-clr">
                            {data.institution}
                        </div>
                    </div>
                </CardContents>

            </CardContent>
        </Card>
    )
}

export default CertificateCard

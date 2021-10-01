/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Autocomplete, Chip, Divider, TextField } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery, useMutation } from '@apollo/client';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { AllSkills } from '@graphql/queries/common/AllSkills';
import { CreateSkills } from '@graphql/mutations/user/skills/CreateSkills';
import { CandidateSkills } from '@graphql/queries/user/skills/CandidateSkills';
import graphqlRes from '@components/functions/graphqlRes';

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}

type AllSkill = {
    id: string,
    name: string
}

const Skills = ({ setActive }: Props) => {
    const [allEducations, { data }] = useLazyQuery(AllSkills)
    const [createSkills] = useMutation(CreateSkills, { refetchQueries: [CandidateSkills], onError: () => null })
    const [allSkills, setAllSkills] = useState<AllSkill[]>([])
    const [value, setValue] = React.useState<any>([]);
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])


    useEffect(() => {
        console.log(data)
        if (data?.allSkills)
            setAllSkills(data?.allSkills)
    }, [data])


    const onBack = () => {
        setActive('education')
    }

    const onContinue = async () => {
        /* const { error, data } = await graphqlRes(createSkills({ variables: { id: Number(value.id), name: value.name } }))

        if (error) {
            setApiError(data)
            return
        }
        console.log('success', data) */
        //setApiSuccess(data)


        setActive('certificates')
    }

    useEffect(() => {
        allEducations()
    }, [])

    console.log(value.length)

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Skills" subtitle="Add your skills, you can add multiple skills" disabled={!value.length} onBack={onBack} onContinue={onContinue} skip={true}>
                    <div className="mt-7 grid gap-2">
                        <Autocomplete
                            disableClearable
                            multiple
                            id="multiple-limit-tags"
                            onChange={(event, newValue) => setValue(newValue)}
                            options={allSkills}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField variant="outlined"  {...params} placeholder="Skills" InputLabelProps={{
                                    shrink: false,
                                }} />
                            )}

                        />
                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>

                <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
            </div>
        </div>
    )
}

export default Skills

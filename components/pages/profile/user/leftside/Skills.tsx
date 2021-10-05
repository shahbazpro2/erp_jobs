/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Autocomplete, Button, Chip, Divider, TextField } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery, useMutation } from '@apollo/client';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { AllSkills } from '@graphql/queries/common/AllSkills';
import { CreateSkills } from '@graphql/mutations/user/skills/CreateSkills';
import { CandidateSkills } from '@graphql/queries/user/skills/CandidateSkills';
import graphqlRes from '@components/functions/graphqlRes';
import SimpleWrapper from './common/SimpleWrapper';



type AllSkill = {
    id: string,
    name: string
}

const Skills = () => {
    const [allSkillsFetch, { data }] = useLazyQuery(AllSkills)
    const [createSkills] = useMutation(CreateSkills, { refetchQueries: [CandidateSkills], onError: () => null })
    const [allSkills, setAllSkills] = useState<AllSkill[]>([])
    const [value, setValue] = React.useState<any>([]);
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])


    useEffect(() => {
        if (data?.allSkills)
            setAllSkills(data?.allSkills)
    }, [data])


    useEffect(() => {
        allSkillsFetch()
    }, [])


    const addNewSkills = () => {

    }


    return (
        <>
            <SimpleWrapper title="Skills">
                <div className="mt-7">
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
                <div className="mt-7">
                    <Button variant="outlined" fullWidth>Add New</Button>
                </div>
            </SimpleWrapper>
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
        </>
    )
}

export default Skills

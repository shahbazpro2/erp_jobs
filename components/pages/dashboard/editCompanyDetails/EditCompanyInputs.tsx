/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { companyIndustry, companySize, getDropdown } from '@components/functions/dropDowns'
import { LoadingButton } from '@mui/lab'
import { MenuItem } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useEffect,useState } from 'react'
import { EditCompanyDetailsProps } from './types'
import { useDropzone } from 'react-dropzone';
import FormHelperText from '@mui/material/FormHelperText';
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css';


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: EditCompanyDetailsProps) => void,
    loading: boolean,
    state: EditCompanyDetailsProps,
    inputError: boolean,
}

const EditCompanyInputs = ({ setState, state, loading, inputError, onSubmit }: Props) => {
    const [editorContent,setEditorContent]=useState('')
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ multiple: false, accept: 'image/jpeg, image/png' });

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    useEffect(() => {
        if (acceptedFiles.length)
            setState({ ...state, 'image': acceptedFiles[0] })
    }, [acceptedFiles])

    useEffect(() => {
        setState({ ...state, 'about': editorContent })
    }, [editorContent])
  

    const file = state.image ?
        <li key={state.image?.name}>
            {state.image?.name} - {state.image?.size} bytes
        </li> : ''

    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <TextFieldSimple inputError={inputError} name="name" label="Company Name" value={state.name} onChange={onChangeInput} />

                <SelectField inputError={inputError} name="type" label="Company Type" value={state.type} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select company type
                    </MenuItem>
                    <MenuItem value="Public Company">Public Company</MenuItem>
                    <MenuItem value="Private Company">Private Company</MenuItem>
                </SelectField>

                <SelectField inputError={inputError} name="size" label="Company Size" value={state.size} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select company size
                    </MenuItem>
                    {getDropdown(companySize).map((drop, index) => (
                        <MenuItem key={index} value={drop.key}>{drop.value}</MenuItem>
                    ))}
                </SelectField>

                <SelectField inputError={inputError} name="industry" label="Company Industry" value={state.industry} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select company industry
                    </MenuItem>
                    {getDropdown(companyIndustry).map((drop, index) => (
                        <MenuItem key={index} value={drop.key}>{drop.value}</MenuItem>
                    ))}
                </SelectField>

                <TextFieldSimple inputError={inputError} name="country" label="Country" value={state.country} onChange={onChangeInput} />

                <TextFieldSimple inputError={inputError} name="state" label="State" value={state.state} onChange={onChangeInput} />
                <div className="text-xl font-bold mt-3 mb-1 ">About Company</div>
                <TextFieldSimple inputError={inputError} name="address" label="Company Address" value={state.address} onChange={onChangeInput} />

                <TextFieldSimple inputError={inputError} name="website" label="Company Website" value={state.website} onChange={onChangeInput} />
                <div>
                    <div className="text-base mb-3 font-bold">Description</div>
                    <div className={`border-[1px] rounded-[7px] p-2 min-h-[300px] w-full max-w-full ${!state.about && inputError ? 'border-danger' : 'border-[#D9D9D9]'}`}>
                        <SunEditor setContents={state.about} onChange={(content:string)=>setEditorContent(content)} setDefaultStyle="font-family: cursive; font-size: 16px;" setOptions={{
                            minHeight: '300',
                            width: "100%",
                            maxHeight: 'auto',
                            buttonList:
                                [
                                    ['bold', 'underline', 'italic', 'strike'],
                                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                                    ['undo', 'redo'],
                                    ['font', 'fontSize'],
                                    ['codeView']
                                ]
                        }} />
                    </div>
                    {(!state.about && inputError) && <FormHelperText className="px-4" error={true}>Please provide company description</FormHelperText>}
                </div>
                <section className="">
                    <div className="text-base mb-3 font-bold">Company Image</div>
                    <div {...getRootProps({ className: `w-full h-[5rem] flex items-center justify-center mb-2 rounded-[7px] border-dashed border-2 cursor-pointer  ${!state.image && inputError ? 'border-danger' : 'border-[#D9D9D9] hover:border-blue-300'}` })}>
                        <input {...getInputProps()} />
                        <p className="subtitle-clr">Drag 'n' drop file here, or click to select file</p>
                    </div>
                    {(!state.image && inputError) && <FormHelperText className="px-4" error={true}>Please select company image</FormHelperText>}
                    <aside>
                        <ul>{file}</ul>
                    </aside>
                </section>

                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Save
                </LoadingButton>

            </div>
        </form>

    )
}

export default EditCompanyInputs

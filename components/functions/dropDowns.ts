
export const jobStatusOptions = {
    "FRESH_AND_LOOKING": "Unemployed. Looking for job",
    "WORKING_BUT_LOOKING": "Working but looking for new opportunities",
    "NOT_LOOKING": "Not looking for job"
}


export const getDropdown = (options: any) => {
    const dropArr = []
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            dropArr.push({ key, value: options[key] })
        }
    }

    return dropArr
}
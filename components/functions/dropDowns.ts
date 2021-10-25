
export const jobStatusOptions = {
    "UNEMPLOYED": "Unemployed",
    "ACTIVELY_LOOKING": "Actively looking",
    "PASSIVELY_LOOKING": "Passively looking"
}

export const profileVisibilityOptions = {
    "PUBLIC": "Public",
    "ANONYMOUS_CV": "Anonymous CV",
    "HIDDEN": "Hidden"
}

export const degreeOptions = {
    "HIGH_SCHOOL": "High School",
    "UNFINISHED_BACHELOR": "Unfinished Bachelor's degree",
    "TWO_YEAR": "Two-year degree",
    "BACHELOR": "Bachelor's degree",
    "MASTER": "Master's degree",
    "DOCTORAL": "Doctoral degree"
}

export const companySize = {
    "ONE": "1-10",
    "TWO": "11-50",
    "THREE": "51-100",
    "FOUR": "101-200",
    "FIVE": "201-500",
    "SIX": "501-1000",
    "SEVEN": "1001-2000"
}

export const companyIndustry = {
    "COMPUTER": "Computer Industry",
    "IT": "IT Industry",
    "TELECOMUNICATION": "Telecommunication industry",
    "EDUCATIO": "Education Industry",
    "PHARMACEUTICAL": "Pharmaceutical Industry",
    "FOOD": "Food Industry",
    "MANUFACTURING": "Manufacturing Industry",
    "WWW": "Worldwide web",
    "ELECTRONICS": "Electronics Industry"
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
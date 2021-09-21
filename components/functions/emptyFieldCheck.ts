const EmptyFieldCheck = (data: any) => {
    let empty = false
    for (const key in data) {
        if (data[key].replace(/ /g, '') === '') {
            empty = true;
            break
        }
    }
    return empty
}

export default EmptyFieldCheck
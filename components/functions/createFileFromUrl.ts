export async function createFileFromUrl(url: string, name: string) {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
        type: 'image/jpeg'
    };
    return new File([data], name, metadata);
}
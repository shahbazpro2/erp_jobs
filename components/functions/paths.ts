import { url_loginUser, url_registerUser, url_userPersonalInformation, url_userProfile, url_userSettings } from "./pageUrls";

interface Props {
    pathname: string
}

export const isProtectedRoute = ({ pathname }: Props) => {
    return ["/test", url_userProfile, url_userPersonalInformation, url_userSettings].includes(pathname)
}

// Determines whether the route is a login route
export const isGuestRoute = ({ pathname }: Props) => {
    return [url_loginUser, url_registerUser].includes(pathname)
};


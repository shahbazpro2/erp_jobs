import { url_userPersonalInformation, url_userProfile } from "./pageUrls";

interface Props {
    pathname: string
}

export const isProtectedRoute = ({ pathname }: Props) => {
    return ["/test", url_userProfile, url_userPersonalInformation].includes(pathname)
}

// Determines whether the route is a login route
export const isGuestRoute = ({ pathname }: Props) => {
    return ["/login/user", "/register/user"].includes(pathname)
};


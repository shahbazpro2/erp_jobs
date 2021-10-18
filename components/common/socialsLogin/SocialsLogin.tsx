import React from 'react'
import Image from 'next/image'

const SocialLogins = () => {
    return (
        <div className="grid grid-cols-3 gap-3 social-links">
            <div className="social-box">
                <Image src="/assets/images/google.svg" width="18%" height="18%" alt="google" />
            </div>
            <div className="social-box">
                <Image src="/assets/images/fb_blue.svg" width="18%" height="18%" alt="facebook" />
            </div>
            <div className="social-box">
                <Image src="/assets/images/twitter_blue.svg" width="18%" height="18%" alt="twitter" />
            </div>
        </div>
    )
}

export default SocialLogins

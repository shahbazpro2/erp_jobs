import MenuCard from '@components/common/menu/MenuCard'
import RouterCard from '@components/common/routerCard/RouterCard'
import { url_dashboardEditCompanyDetails, url_dashboardJobs } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'

const settingList = [
    { url: url_dashboardEditCompanyDetails, title: 'Edit Company Details' },
    { url: '', title: 'Company Page' },
    { url: '', title: 'Edit Contact Details' },
    { url: '', title: 'Change Password' },
    { url: '', title: 'Notification Settings' }
]

interface Props {
    active: string
}

const SideMenu = ({ active }: Props) => {
    return (
        <div className="mt-7 space-y-3">
            <RouterCard image="/assets/images/my-jobs-purple.png" content="My Jobs" onHandleClick={() => router.push(url_dashboardJobs)} active={active === 'jobs'} />
            <RouterCard image="/assets/images/cv-search-blue.png" content="CV Search" onHandleClick={() => router.push('/')} />
            <RouterCard image="/assets/images/cv-folder-blue.png" content="CV Folders" onHandleClick={() => router.push('/')} />
            <RouterCard image="/assets/images/recrtmnt-pkgs-blue.png" content="Recruitment Packages" onHandleClick={() => router.push('/')} />
            <MenuCard image="/assets/images/setting-blue.png" content="Setting" list={settingList} active={settingList.filter(f => f.url === active).length ? true : false} />
            <RouterCard image="/assets/images/logout-blue.png" content="Logout" onHandleClick={() => router.push('/')} />
        </div>
    )
}

export default SideMenu

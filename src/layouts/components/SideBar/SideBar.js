import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import {HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import * as userService from '~/services/userService'

const css = classNames.bind(styles);


function SideBar() {
    
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then(data => {
                setSuggestedUsers(prev => [...prev, ...data])
            })
            .catch(error => console.log(error))
    }, []);
    
    return (
        <aside className={css('wrapper')}>
            <Menu>
                <MenuItem title='For you' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title='Following' to={config.routes.following } icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title='Live' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/> } />
            </Menu>

            <SuggestedAccounts label='Suggested accounts' data={suggestedUsers} />
            
            <SuggestedAccounts label='Following accounts'/>

        </aside>
    );
}

export default SideBar;

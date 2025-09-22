import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';


const css = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={css('wrapper')}>
            <Menu>
                <MenuItem title='For you' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title='Following' to={config.routes.following } icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title='Live' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/> } />
            </Menu>

            <SuggestedAccounts label='Suggested accounts' />
            
            <SuggestedAccounts label='Following accounts'/>

        </aside>
    );
}

export default SideBar;

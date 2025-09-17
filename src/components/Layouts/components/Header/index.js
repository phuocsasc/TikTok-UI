import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tipy from '@tippyjs/react';
import HeadlessTipy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { SearchIcon, UploadIcon, InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';

const css = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // logic ...
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={css('wrapper')}>
            <div className={css('inner')}>
                <div className={css('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>
                <HeadlessTipy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={css('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={css('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={css('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={css('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={css('loading')} icon={faSpinner} />

                        <button className={css('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTipy>

                <div className={css('actions')}>
                    {currentUser ? (
                        <>
                            <Tipy delay={[0, 50]} content="Upload videos" placement="bottom">
                                <button className={css('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tipy>
                            <Tipy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={css('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tipy>
                            <Tipy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={css('action-btn')}>
                                    <InboxIcon />
                                    <span className={css('badge')}>12</span>
                                </button>
                            </Tipy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={css('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/63fce0ef15352f453b4694cfb5671c12~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=1dc38199&x-expires=1758254400&x-signature=rN0M7hIP%2BsjPJA2vvGpwCXhE6QI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                                alt="Nguyen van A"
                            />
                        ) : (
                            <button className={css('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

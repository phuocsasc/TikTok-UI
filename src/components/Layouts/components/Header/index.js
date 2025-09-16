import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const css = classNames.bind(styles);

function Header() {
    return (
        <header className={css('wrapper')}>
            <div className={css('inner')}>
                <div className={css('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>
                <div className={css('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={css('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={css('loading')} icon={faSpinner} />
                    <button className={css('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={css('actions')}>actions</div>
            </div>
        </header>
    );
}

export default Header;

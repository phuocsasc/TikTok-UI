import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const css = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={css('header')}>
            <button className={css('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={css('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;

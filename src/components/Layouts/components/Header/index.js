import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const css = classNames.bind(styles);

function Header() {
    return (
        <header className={css('wrapper')}>
            <div className={css('inner')}></div>
        </header>
    );
}

export default Header;

import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
const css = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={css('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;

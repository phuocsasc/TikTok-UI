import Header from '~/layouts/components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={css('wrapper')}>
            <Header />
            <div className={css('container')}>
                <SideBar />
                <div className={css('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

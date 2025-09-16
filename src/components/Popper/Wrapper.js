import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const css = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={css('wrapper')}>{children}</div>;
}

export default Wrapper;

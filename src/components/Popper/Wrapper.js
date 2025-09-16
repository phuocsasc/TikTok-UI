import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const css = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={css('wrapper', className)}>{children}</div>;
}

export default Wrapper;

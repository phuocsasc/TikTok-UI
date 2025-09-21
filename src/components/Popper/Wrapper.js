import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const css = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={css('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired, 
    className: PropTypes.string,
}

export default Wrapper;

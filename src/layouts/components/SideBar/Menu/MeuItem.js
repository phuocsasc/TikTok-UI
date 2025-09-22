import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const css = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
    return ( 
        <NavLink className={(nav) => css('menu-item', {active: nav.isActive})} to={to}>
            <span className={css('icon')}>{icon}</span>
            <span className={css('active-icon')}>{activeIcon}</span>
            <span className={css('title')}>{title}</span>
        </NavLink>
     );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,

}

export default MenuItem;
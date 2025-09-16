import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const css = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={css('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={css('menu-wrapper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

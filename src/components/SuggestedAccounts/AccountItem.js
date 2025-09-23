import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';

const css = classNames.bind(styles)

function AccountItem({data}) {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={ data} />
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <Tippy
            interactive
            appendTo='parent'
            offset={[-20, 0]}
            delay={[800, 0]}
            placement='bottom'
            render={renderPreview}
        >
            <div className={css('account-item')}> 
                <Image className={css('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={css('item-info')}>
                    <p className={css('nickname')}>
                        <strong>{ data.nickname }</strong>
                        {data.tick && <FontAwesomeIcon className={css('check')} icon={faCheckCircle}/>}
                    </p>
                    <p className={css('name')}>{`${data.first_name} ${data.last_name}`}</p>
    
                </div>
            </div>
        </Tippy>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;
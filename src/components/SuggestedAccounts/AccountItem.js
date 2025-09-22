import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";

import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image';

const css = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={css('account-item')}> 
            <Image className={css('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7e0309511dc30326ee48a57816ef49fb~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=377b17ee&x-expires=1758686400&x-signature=KAxLtdyYvCBUYUZcS56EHZqQe24%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my3' alt='as' />
            <div className={css('item-info')}>
                <p className={css('nickname')}>
                    <strong>tranPhuoc</strong>
                    <FontAwesomeIcon className={css('check')} icon={faCheckCircle}/>
                </p>
                <p className={css('name')}>Trần Ngọc Phước</p>

            </div>
        </div>
     );
}

AccountItem.propTypes = {

}

export default AccountItem;
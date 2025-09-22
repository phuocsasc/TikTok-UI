import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Image from '~/components/Image';
import Button from "~/components/Button";



const css = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={css('wrapper')}>
            <div className={css('header')}>
                <Image className={css('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7e0309511dc30326ee48a57816ef49fb~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=377b17ee&x-expires=1758686400&x-signature=KAxLtdyYvCBUYUZcS56EHZqQe24%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my3' alt='' />
                <Button className={css('follow-btn')} primary>Follow</Button>
            </div>
            <div className={css('body')}>
                <p className={css('nickname')}>
                    <strong>tranPhuoc</strong>
                    <FontAwesomeIcon className={css('check')} icon={faCheckCircle}/>
                </p>
                <p className={css('name')}>Trần Ngọc Phước</p>
                <p className={css('analytics')}>
                    <strong className={css('value')}>8.2M </strong>
                    <span className={css('label')}>Follower</span>
                    <strong className={css('value')}>423.2M </strong>
                    <span className={css('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
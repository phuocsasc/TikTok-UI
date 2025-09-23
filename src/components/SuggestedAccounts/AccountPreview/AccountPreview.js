import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Image from '~/components/Image';
import Button from "~/components/Button";



const css = classNames.bind(styles)

function AccountPreview({ data }) {
    return (
        <div className={css('wrapper')}>
            <div className={css('header')}>
                <Image className={css('avatar')} src={ data.avatar} alt={data.nickname} />
                <Button className={css('follow-btn')} primary>Follow</Button>
            </div>
            <div className={css('body')}>
                <p className={css('nickname')}>
                    <strong>{data.nickname }</strong>
                    {data.tick && <FontAwesomeIcon className={css('check')} icon={faCheckCircle}/>}
                </p>
                <p className={css('name')}>{`${data.first_name} ${data.last_name}` }</p>
                <p className={css('analytics')}>
                    <strong className={css('value')}>{data.followings_count} </strong>
                    <span className={css('label')}>Follower</span>
                    <strong className={css('value')}>{ data.likes_count} </strong>
                    <span className={css('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountPreview;
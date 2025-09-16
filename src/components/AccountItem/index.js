import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const css = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={css('wrapper')}>
            <img
                className={css('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d805eb67cea6f83eae933a6dbce7012e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=f38d69fe&x-expires=1758200400&x-signature=mwWUCA8%2BPqTix47zTEaXqTx3esI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                alt="Hoaaa"
            />
            <div className={css('info')}>
                <h4 className={css('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={css('check')} icon={faCheckCircle} />
                </h4>
                <span className={css('username')}>NguyenVanAaa</span>
            </div>
        </div>
    );
}

export default AccountItem;

import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem';

const css = classNames.bind(styles)

function SuggestedAccounts({ label, data = [],  }) {
    return (
        <div className={css('wrapper')}>
            <p className={css('label')}>{label}</p>
            {data.map(account => (
                <AccountItem key={account.id} data={ account} />
            ))}

            <p className={css('more-btn')}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
}

export default SuggestedAccounts;
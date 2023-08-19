import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690765200&x-signature=yg9h540VDd5WMtVkaE8ItoNBeCc%3D"
                alt=""
            />
            <div className={cx('item-info')} >
                <p className={cx('nickname')}>
                    <strong>lehoiha</strong>
                    <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Lê hội hà</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

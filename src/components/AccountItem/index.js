import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link}  from 'react-router-dom'
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {/*khi có data.tick bằng true mới hiển thị tick xanh  */}
                {data.tick && < FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

// kiểm tra xem prop data có phải là 1 object và data bắt buộc truyền
AccountItem.propTypes ={
    data: PropTypes.object.isRequired,
}

export default AccountItem;

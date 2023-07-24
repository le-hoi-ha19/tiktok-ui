import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from './AcountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)



function AccountItem() {
    return ( <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690380000&x-signature=folpPUSRDFkzMaQX08NgayhVSFE%3D" alt="hoa" />
        <div className = {cx('info')}>
            <h4 className= {cx('name')}>
                <span>Le hoi ha</span>
                <FontAwesomeIcon className={cx('check')}  icon={faCheckCircle}/>
            </h4>
            <span className= {cx('username')}>le hoi ha</span>
        </div>
    </div> );
}

export default AccountItem;
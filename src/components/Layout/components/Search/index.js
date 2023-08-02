import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef();
    const handleClear = () => {
        // đặt lại giá trị ô input bằng chuỗi rỗng
        setSearchValue('');
        // ẩn hiển thị kết quả
        setSearchResult([]);
        // focus vào ô input
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        // bấm ra ngoài thì ẩn hiển thị kết quả
        setShowResult(false)
    }
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        });
    }, []);
    return (
        <HeadlessTippy
            interactive
            // điều kiện hiển thị kết quả tìm kiếm
            visible={showResult && searchResult.length > 0}
            // kết quả tìm kiếm
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            // khi bấm ra ngoài khu vực hiển thị kết quả tìm kiếm
            onClickOutside ={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    // khi focus vào ô input thì hiển thị lại kết quả tìm kiếm
                    onFocus={()=> setShowResult(true)} 
                />
                {
                    // khi có search mới hiển thị button clear
                    !!searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                }
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    // khi người dùng ngừng gõ 500 mili giây thì thì giá trị debouncedValue này nó mới được
    // update bằng giá trị mới nhất của searchValue
    const debouncedValue = useDebounce(searchValue, 500);
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
        setShowResult(false);
    };
    useEffect(() => {
        // nếu giá trị gõ vào ô input là dấu cách cách thì không tìm kiếm:.trim()
        // nếu không gõ vào ô input thì dữ liệu là chuỗi rỗng thì k tìm kiếm
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        // hàm gọi api để lấy dữ liêụ
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    // hàm xử lý không cho gõ dấu cách trong ô input
    const handleChange =(e) =>{
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ') ){
            setSearchValue(e.target.value)
        }
        
    }
    
    return (
        // dùng thẻ div để fix lỗi tippy
       <div>
            <HeadlessTippy
                interactive
               
                // điều kiện hiển thị kết quả tìm kiếm
                visible={showResult && searchResult.length > 0}
                // kết quả tìm kiếm
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* hiển thị dữ tài khoản lấy từ api */}
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                // khi bấm ra ngoài khu vực hiển thị kết quả tìm kiếm
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        // khi focus vào ô input thì hiển thị lại kết quả tìm kiếm
                        onFocus={() => setShowResult(true)}
                    />
                    {
                        // khi có search mới hiển thị button clear
                        !!searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )
                    }
                    {/* nếu loading bằng true thì icon quay */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                    <button className={cx('search-btn')} onMouseDown={e =>e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
       </div>
    );
}

export default Search;

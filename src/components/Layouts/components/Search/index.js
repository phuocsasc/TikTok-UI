import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTipy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchService from '~/apiServices/searchService'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const css = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }
        
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debounced);
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()

    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (searchValue.startsWith(' ')) {
            return 
        }

        setSearchValue(searchValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <HeadlessTipy
            interactive
            appendTo='parent'
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={css('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={css('search-title')}>Accounts</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={css('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={css('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={css('loading')} icon={faSpinner} />}

                <button className={css('search-btn')} onMouseDown={handleSubmit}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTipy>
    );
}

export default Search;

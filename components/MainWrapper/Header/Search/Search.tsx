import Image from 'next/image';
import React, { FC, FormEvent } from 'react';
import search from "../../../../assets/img/Header/search.svg"
import styles from "./Search.module.scss"

const Search: FC = () => {

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form className={styles.searchField} onSubmit={handleSearch}>
            <input type="search" />
            <button
                type='button'
            >
                <Image src={search} alt="search button"/>
            </button>
        </form>
    );
};

export default Search;
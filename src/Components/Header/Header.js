import React from 'react';
import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import TopBar from './TopBar/TopBar';
import TopNav from './TopNav/TopNav';

const Header = () => {
    return (
        <header>
            <TopBar></TopBar>
            <SearchBar></SearchBar>
            <TopNav></TopNav>
        </header>
    );
};

export default Header;
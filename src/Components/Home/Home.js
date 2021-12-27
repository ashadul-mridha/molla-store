import React from 'react';
import SearchBar from '../Header/SearchBar/SearchBar';
import TopBar from '../Header/TopBar/TopBar';
import TopNav from '../Header/TopNav/TopNav';

const Home = () => {
    return (
        <header>
            <TopBar></TopBar>
            <SearchBar></SearchBar>
            <TopNav></TopNav>
        </header>
    );
};

export default Home;
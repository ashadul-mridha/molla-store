import React from 'react';
import BannerGroup from '../BannerGroup/BannerGroup';
import DealContent from '../DealContent/DealContent';
import Header from '../Header/Header';
import SearchBar from '../Header/SearchBar/SearchBar';
import TopBar from '../Header/TopBar/TopBar';
import TopNav from '../Header/TopNav/TopNav';
import Hero from '../Hero/Hero';
import PopularBrand from '../PopularBrand/PopularBrand';
import TopProduct from '../TopProduct/TopProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <PopularBrand></PopularBrand>
            <BannerGroup></BannerGroup>
            <TopProduct></TopProduct>
            <DealContent></DealContent>
        </div>
    );
};

export default Home;
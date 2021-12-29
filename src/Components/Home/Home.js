import React from 'react';
import BannerGroup from '../BannerGroup/BannerGroup';
import DealContent from '../DealContent/DealContent';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Info from '../Info/Info';
import NewsLetter from '../NewsLetter/NewsLetter';
import PopularBrand from '../PopularBrand/PopularBrand';
import TopProduct from '../TopProduct/TopProduct';
import TopSellingProduct from '../TopSellingProduct/TopSellingProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <PopularBrand></PopularBrand>
            <BannerGroup></BannerGroup>
            <TopProduct></TopProduct>
            <DealContent></DealContent>
            <TopSellingProduct></TopSellingProduct>
            <Info></Info>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
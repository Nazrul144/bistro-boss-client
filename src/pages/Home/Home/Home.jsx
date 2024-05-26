import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BitroBoss from '../BitroBoss/BitroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import RecommendItems from '../RecommendItems/RecommendItems';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BitroBoss></BitroBoss>
            <PopularMenu></PopularMenu>
            <RecommendItems></RecommendItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
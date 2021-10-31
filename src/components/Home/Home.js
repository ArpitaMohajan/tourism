import React from 'react';
import AboutPlace from '../AboutPlace/AboutPlace';
import Banner from '../Banner/Banner';
import Offering from '../Offering/Offering';
import Services from '../Services/Services';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Offering></Offering>
            <Services></Services>
            <AboutPlace></AboutPlace>
            <Footer></Footer>

        </div>
    );
};

export default Home;
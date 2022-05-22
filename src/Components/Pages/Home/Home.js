import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
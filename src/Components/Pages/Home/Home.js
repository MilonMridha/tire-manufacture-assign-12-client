import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Footer></Footer>
        </div>
    );
};

export default Home;
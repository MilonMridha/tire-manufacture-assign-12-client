import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import FirstSection from './FirstSection';
import Parts from './Parts';
import Reviews from './Reviews';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Reviews></Reviews>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
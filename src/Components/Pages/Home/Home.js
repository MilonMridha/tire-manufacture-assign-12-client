import React from 'react';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
        </div>
    );
};

export default Home;
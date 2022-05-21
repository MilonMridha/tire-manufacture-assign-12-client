import React from 'react';
import SummuryInfo from './SummuryInfo';
import flag from '../../../assets/icon/flag.jpg'
import project from '../../../assets/icon/project.jpg'
import Client from '../../../assets/icon/client.png'
import feedback from '../../../assets/icon/feedback.png'

const BussinesSummury = () => {
    return (
        <div className='py-8'>
            <h2 className='text-3xl font-bold font-mono'>Business Summary</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-2 px-5'>
                <SummuryInfo img={flag} tittle='105+' info="Countries"></SummuryInfo>
                <SummuryInfo img={project} tittle='888+' info="Complet Project"></SummuryInfo>
                <SummuryInfo img={Client} tittle='1000+' info="Happy Clients"></SummuryInfo>
                <SummuryInfo img={feedback} tittle='556+' info="Feedbacks"></SummuryInfo>

            </div>
        </div>
    );
};

export default BussinesSummury;
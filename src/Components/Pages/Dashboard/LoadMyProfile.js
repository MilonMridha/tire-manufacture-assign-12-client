import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading'

const LoadMyProfile = ({profile}) => {
    

const {name, email, education, location, link, phone, _id} = profile;
console.log('amar nam', name)

    const [user] = useAuthState(auth)

    return (
        <div class="card  bg-primary text-primary-content">
            <h2 className='text-2xl font-mono font-semibold'>Profile</h2>
            <div class="card-body font-mono font-bold text-left">
                <h2 class="card-title">Name: {user?.displayName}</h2>
                <p className='font-bold text-xl'>Email: {user?.email}</p>
                <p className='font-bold'>Location: {location}</p>
                <p className='font-bold'>Education: {education}</p>
                <p className='font-bold'>LinkedIn: {link}</p>
                <p className='font-bold'>Phone: {phone}</p>
                
            </div>
        </div>
    );
};

export default LoadMyProfile;
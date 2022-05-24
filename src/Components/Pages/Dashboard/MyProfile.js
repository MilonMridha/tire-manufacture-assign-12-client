import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const emailRef = useRef('')
    const nameRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const urlRef = useRef('')

    const handleProfile = event => {
        event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const location = addressRef.current.value;
    const phone = phoneRef.current.value;
    const link = urlRef.current.value;

    const profile = {
        email, name, location, phone, link
    };

    const url = `http://localhost:5000/profile/${email}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            toast.success('Update Your Profile Successfully')
        }
        event.target.reset();
    })




    }
    return (
        <div>
            <h3 className='text-2xl font-mono font-bold'>Update Your Profile</h3>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Your Order</h2>
                    <form onSubmit={handleProfile}>
                        <input ref={emailRef} disabled className='border-b-2 border-primary w-full p-3' type="text" name="email" value={user?.email} id="" />

                        <input ref={nameRef} disabled className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="name" value={user?.displayName} id="" />

                        <input ref={addressRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="address" placeholder='Location' id="" />

                        <input ref={phoneRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="phone" placeholder='Phone' id="" />

                        <input ref={urlRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="photo" placeholder='LinkedIn link' id="" />

                        <div className=' flex justify-end mt-5'>
                            <input className='btn btn-primary rounded-none' type="submit" value="Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
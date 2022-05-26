import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const ResetPass = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');


    const handleResetPassword = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        if (email) {
           
            await sendPasswordResetEmail(email);
            toast.success('Sent email for reset password');
        } else {
            toast.error('Enter Your valid email')
        }
        event.target.reset();
    }
    return (
        <div className='flex justify-center items-center py-12 mt-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Reset Your Password</h2>
                    <form onSubmit={handleResetPassword}>
                        <input ref={emailRef} className='border-b-2 border-primary w-full p-3' type="email" name="email" placeholder='Enter Your Email' id=""/>

                        <div className=' flex justify-end mt-5'>
                            <input className='btn btn-primary rounded-none' type="submit" value="Reset Password" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;
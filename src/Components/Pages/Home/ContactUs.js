import React from 'react';
import ReactTyped from 'react-typed';
import bg from '../../../assets/appointment.png'


const ContactUs = () => {
    return (
        <section style={{ background: `url(${bg})` }} className='py-10 rounded mt-10' >
            <div className='text-center mb-10 '>
                <h3 className='text-secondary'>Contact Us</h3>
                <h2 className='text-3xl text-white font-bold mt-5'> <ReactTyped
                    strings={["Stay connected with us.."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /></h2>
                <div className='items-center justify-center'>
                    <input type="text" placeholder="Email" name="email" className="input mt-5 mx-auto block input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Subject" name="subject" className="input mx-auto  input-bordered input-sm mt-5 w-full max-w-xs  block" />

                    <textarea type="text" placeholder="Your messages" name='message' className="input block mx-auto mb-5 input-bordered mt-5 input-lg w-full max-w-xs" />
                    <button className='btn btn-accent'>Submit</button>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;
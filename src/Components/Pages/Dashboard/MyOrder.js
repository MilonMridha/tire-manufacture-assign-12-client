import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CancelOrderModal from './CancelOrderModal';
import SingleOrder from './SingleOrder';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrder] = useState([]);
    const [cancelOrder, setCancelOrder] = useState(null);

    useEffect(()=>{
        const email = user?.email;
        const url = `http://localhost:5000/order?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[])

    return (
        <div>
            <h3 className='text-2xl font-mono font-bold'>My orders: {myOrders?.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                {
                    myOrders?.map(order=> <SingleOrder
                    key={order._id}
                    order={order}
                    setCancelOrder={setCancelOrder}
                    ></SingleOrder>)
                }
            </div>

            {
                cancelOrder && <CancelOrderModal
                cancelOrder={cancelOrder}
                
                ></CancelOrderModal>
            }
           
        </div>
    );
};

export default MyOrder;
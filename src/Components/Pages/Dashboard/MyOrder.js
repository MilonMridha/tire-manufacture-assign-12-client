import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import SingleOrder from './SingleOrder';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    
    const [cancelOrder, setCancelOrder] = useState(null);


    const {data: myOrders, isLoading, refetch} = useQuery('order', () => fetch(`http://localhost:5000/order?email=${email}`).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    

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
                refetch={refetch}
                setCancelOrder={setCancelOrder}
                ></CancelOrderModal>
            }
           
        </div>
    );
};

export default MyOrder;
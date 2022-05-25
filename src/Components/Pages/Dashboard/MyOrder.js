import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import SingleOrder from './SingleOrder';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const navigate = useNavigate();
    const [cancelOrder, setCancelOrder] = useState(null);



    const { data: myOrders, isLoading, refetch } = useQuery('order', () => fetch(`https://dry-sea-91165.herokuapp.com/order?email=${email}`, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        
        if (res.status === 401 || res.status === 403) {
            navigate('/');
            signOut(auth)
            localStorage.removeItem('accessToken')
        }
        return res.json()
    }))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className='text-2xl font-mono font-bold'>My orders: {myOrders?.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                {
                    myOrders?.map(order => <SingleOrder
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
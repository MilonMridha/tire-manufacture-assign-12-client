import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import OrderRow from './OrderRow';

const ManageAllOrder = () => {

    const { data: allOrders, isLoading, refetch } = useQuery('order', () => fetch('https://dry-sea-91165.herokuapp.com/all-order').then(res => res.json()))

    console.log(allOrders)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'>Manage All Order: {allOrders?.length}</h2>
            <div>

                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders?.map((order, index) => <OrderRow
                            key={order._id}
                            order={order}
                            index={index}
                            refetch={refetch}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;
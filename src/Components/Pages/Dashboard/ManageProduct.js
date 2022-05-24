import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageCard from './ManageCard';

const ManageProduct = () => {

    const { data: items, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'> Manage Product : {items?.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    items?.map(item => <ManageCard
                        key={item._id}
                        item={item}
                        refetch={refetch}
                    ></ManageCard>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;
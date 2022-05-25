import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageCard from './ManageCard';
import ManageModal from './ManageModal';

const ManageProduct = () => {

    const [deleteItem, setDeleteItem] = useState(null);
    

    const { data: items, isLoading, refetch } = useQuery('parts', () => fetch('https://dry-sea-91165.herokuapp.com/parts').then(res => res.json()))

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
                        
                        setDeleteItem={setDeleteItem}
                    ></ManageCard>)
                }
            </div>
            {
                deleteItem && <ManageModal
                refetch={refetch}
                deleteItem={deleteItem}
                setDeleteItem={setDeleteItem}
                ></ManageModal>
            }
        </div>
    );
};

export default ManageProduct;
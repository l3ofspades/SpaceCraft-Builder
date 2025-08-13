import React from 'react';
import ItemAction from './ItemAction';

const ItemCard = ({ item, deleteItem }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Purpose:</strong> {item.purpose}</p>
            <ItemAction deleteItem={deleteItem} />
        </div>
    );
};

export default ItemCard;

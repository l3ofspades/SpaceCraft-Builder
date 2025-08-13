import React from 'react';

const ItemAction = ({ deleteItem }) => {
    return <button onClick={deleteItem}>Delete Item</button>;
};

export default ItemAction;
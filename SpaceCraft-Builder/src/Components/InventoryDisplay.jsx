import React from 'react';
import ItemCard from './ItemCard';

const InventoryDisplay = ({ inventory, deleteItem }) => {
    return (
        <div>
            <h2>Inventory</h2>
            {inventory.map((item, index) => (
                <ItemCard
                    key={index}
                    item={item}
                    deleteItem={() => deleteItem(index)}
                />
            ))}
        </div>
    );
};

export default InventoryDisplay;

                    
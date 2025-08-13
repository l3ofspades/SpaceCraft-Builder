import React, { useState } from 'react';
import ItemForm from './ItemForm';
import InventoryDisplay from './InventoryDisplay';

const SpacecraftBuilder = () => {
  const [inventory, setInventory] = useState([]);

  // Add an item to the inventory
    const addItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
    };

    // Delete item by index
    const deleteItem = (index) => {
        const updatedInventory = inventory.filter((_, i) => i !== index);
        setInventory(updatedInventory);
    };

    return (
        <div>
            <h1>SpaceCraft Builder</h1>
            <ItemForm addItem={addItem} />
            <InventoryDisplay inventory={inventory} deleteItem={deleteItem} />
        </div>
    );
};

export default SpacecraftBuilder;

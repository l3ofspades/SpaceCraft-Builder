import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purpose, setPurpose] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = 'Required!';
        if (!quantity) newErrors.quantity = 'Required!';
        if (!purpose) newErrors.purpose = 'Required!';

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        addItem({ name, quantity, purpose });
        setName('');
        setQuantity('');
        setPurpose('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ boarderColor: error.quantity ? 'red' : '' }}
            />
            <input
                type="text"
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                style={{ boarderColor: error.purpose ? 'red' : '' }}
            />
            <button type="submit">Add Item</button>
            </form>
    );
    };

    export default ItemForm;
import React from 'react';
import './Cart.css';

const Cart = ({ c }) => {
	const { image, name } = c;
	return (
		<div className="d-flex justify-content-space-between align-items-center bg-warning p-3 m-2 rounded">
			<img src={image} className="image rounded-circle me-3" alt="" />
			<p>{name}</p>
		</div>
	);
};

export default Cart;

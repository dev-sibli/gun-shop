// import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Gun from '../Gun/Gun';
import './Shop.css';

const Shop = () => {
	const [guns, setGuns] = useState([]);
	const [cart, setCart] = useState([]);
	const [element, setElement] = useState([]);
	useEffect(() => {
		fetch('guns.json')
			.then((response) => response.json())
			.then((data) => setGuns(data));
	}, []);
	const handleCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
	};

	const randomCart = (props) => {
		let randomElem = props[Math.floor(Math.random() * props.length)];
		setElement(randomElem);
	};
	const removeHandle = () => {
		setElement([]);
		setCart([]);
	};
	// console.log(element);
	return (
		<div className="container mt-3">
			<div className="row ">
				<div className="row col-lg-9 col-sm-12 ">
					{guns.map((gun) => (
						<Gun key={gun.id} gun={gun} handleCart={handleCart}></Gun>
					))}
				</div>
				<div className="col-lg-3 col-sm-12 bg-success pt-3 mt-4">
					{cart.map((c) => (
						<Cart key={c.id} c={c}></Cart>
					))}
					<p>{element.name}</p>
					<button
						onClick={() => randomCart(cart)}
						className=" btn btn-primary w-100 p-2 my-2"
					>
						Choose One for Me
					</button>
					<button
						onClick={() => removeHandle()}
						className=" btn btn-primary w-100 p-2 my-2"
					>
						Choose again
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;

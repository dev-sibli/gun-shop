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
		if (newCart.length <= 4) {
			setCart(newCart);
		} else {
			alert('hi');
		}
	};

	const randomCart = (props) => {
		let randomElement = props[Math.floor(Math.random() * props.length)];
		setElement(randomElement);
	};
	const removeHandle = () => {
		setElement([]);
		setCart([]);
	};
	return (
		<div className="container mt-3">
			<div className="row ">
				<div className="row col-lg-9 col-sm-12 ">
					{guns.map((gun) => (
						<Gun key={gun.id} gun={gun} handleCart={handleCart}></Gun>
					))}
				</div>
				<div className="col-lg-3 col-sm-12 card pt-3 mt-4">
					{cart.map((c) => (
						<Cart key={c.id} c={c}></Cart>
					))}
					<div className="m-3">
						<h5>{element.name}</h5>
					</div>

					<button
						onClick={() => randomCart(cart)}
						className=" shop-button w-100 p-2 my-2"
					>
						Choose One for Me
					</button>
					<button
						onClick={() => removeHandle()}
						className=" shop-button w-100 p-2 my-2"
					>
						Choose again
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;

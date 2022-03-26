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
			alert('Please select 4 items only');
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
					<div className="m-3">
						<h3>How React works?</h3>
						<p>
							React creates a VIRTUAL DOM in memory. Instead of manipulating the
							browser's DOM directly, React creates a virtual DOM in memory,
							where it does all the necessary manipulating, before making the
							changes in the browser DOM. then changes only what needs to be
							changed
						</p>
						<h3>Props Vs State</h3>
						<h4>Props</h4>
						<ul>
							<li>Props are read-only.</li>
							<li>Props are immutable.</li>
							<li>
								Props allow you to pass data from one component to other
								components as an argument.
							</li>
							<li>Props can be accessed by the child component.</li>
							<li>Props are used to communicate between components.</li>
						</ul>
						<h4>State</h4>
						<ul>
							<li>State changes can be asynchronous.</li>
							<li>State is mutable.</li>
							<li>State holds information about the components.</li>
							<li>State cannot be accessed by child components.</li>
							<li>
								States can be used for rendering dynamic changes with the
								component.
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-12 card pt-3 mt-4">
					{cart.map((item) => (
						<Cart key={item.id} item={item}></Cart>
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

import React from 'react';
import './Gun.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Gun = (props) => {
	console.log(props);
	const { name, price, image } = props.gun;
	return (
		<div className="col-lg-4 col-md-3 col-sm-1 g-4">
			<div class="col">
				<div class="card h-100">
					<img src={image} className="card-img-top" alt="" />

					<div class="card-body">
						<h5 class="card-title">{name}</h5>
						<p class="card-text">Price: {price}</p>
					</div>
					<div class="card-footer">
						<button className="btn btn-primary w-100 py-2">
							Add to Cart{' '}
							<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gun;

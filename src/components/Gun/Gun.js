import React from 'react';
import './Gun.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Gun = ({ gun, handleCart }) => {
	const { name, price, image } = gun;
	return (
		<div className="col-lg-4 col-md-3 col-sm-1 g-4">
			<div className="col">
				<div className="card h-100">
					<img src={image} className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">Price: {price}</p>
					</div>
					<div className="card-footer">
						<button
							className="btn btn-primary w-100 py-2"
							onClick={() => handleCart(gun)}
						>
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

import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Shop.css';

const Shop = () => {
	const [guns, setGuns] = useState([]);
	useEffect(() => {
		fetch('guns.json')
			.then((response) => response.json())
			.then((data) => setGuns(data));
	}, []);
	return (
		<div className="container mt-3">
			<div className="row ">
				<div className="row col-9 ">
					{guns.map((gun) => (
						<Gun key={gun.id} gun={gun}></Gun>
					))}
				</div>
				<div className="col-3">
					<h1>He</h1>
				</div>
			</div>
		</div>
	);
};

export default Shop;

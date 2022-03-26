import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
	return (
		<div className="mb-5">
			<Header></Header>
			<Shop></Shop>
		</div>
	);
}

export default App;

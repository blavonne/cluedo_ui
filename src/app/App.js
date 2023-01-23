import './App.css';
import StartPage from "../pages/start/StartPage";

function App() {
	console.log('this is some var', process.env.NODE_ENV)
	return (
		<div className="App">
			<StartPage/>
		</div>
	);
}

export default App;

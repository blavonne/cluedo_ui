import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './style.scss';
import StartPage from "../pages/StartPage/StartPage";
import BoardPage from "../pages/BoardPage/BoardPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<StartPage/>}/>
				<Route path='/board' element={<BoardPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

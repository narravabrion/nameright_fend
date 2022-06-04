import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import {
	AddNamePage,
	Error404Page,
	HomePage,
	NameDetailPage,
	NamesPage,
} from "./pages"

function App() {
	return (
		<>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/names' element={<NamesPage />} />
					<Route path='/name-details/:id' element={<NameDetailPage />} />
					<Route path='/add-name' element={<AddNamePage />} />
					<Route path='*' element={<Error404Page />} />
				</Routes>
				<Footer/>
			</Router>
		</>
	)
}

export default App

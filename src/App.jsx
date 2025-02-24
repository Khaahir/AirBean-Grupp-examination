import React from "react";
import "./styles/style.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Status from "./pages/Status";

function App() {
  return (
	<BrowserRouter>
	<Routes>
		<Route path="/" element={<Landing />}></Route>
		<Route path="/menu" element={<Menu />}></Route>
		<Route path="/about" element={<About />}></Route>
		<Route path="/cart" element={<Cart />}></Route>
		<Route path="/status" element={<Status />}></Route>
	</Routes>
</BrowserRouter>
  )
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/contact" exact element={<Contact />} />
					<Route path="/blog" exact element={<Blog />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
};

export default App;

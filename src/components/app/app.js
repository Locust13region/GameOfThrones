import React, { Component } from "react";
import { CharactersPage, HousesPage, BooksPage, Book, NotFoundPage } from "../pages";
import { Routes, Route } from "react-router-dom";
import Layuot from "../layuot";

export default class App extends Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Layuot />}>
					<Route path="*" element={<NotFoundPage />} />
					<Route path="characters" element={<CharactersPage />} />
					<Route path="houses" element={<HousesPage />} />
					<Route path="books" element={<BooksPage />} />
					<Route path="books/:selectedBook" element={<Book />} />
				</Route>
			</Routes> 
		);
	}
}

import React, { Component } from "react";
import ItemList from "../itemList";
import InfService from "../../services";
import { Navigate } from "react-router-dom";


export default class BooksPage extends Component {

	InfService = new InfService();

	render() {

		return (
			<ItemList
				getData={this.InfService.getBooks}
				onSelected={(itemId) => {
				console.log(`/books/${itemId}`)
				return <Navigate to={`/books/${itemId}`} replase={true} />
				}
				}
				selectedItem={null}
				itemValues={(item) => item.name}
			/>
		);
	}
}

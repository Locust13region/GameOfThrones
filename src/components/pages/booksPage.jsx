import React from "react";
import ItemList from "../itemList";
import InfService from "../../services";
import { useNavigate } from "react-router-dom";


const BooksPage = () => {
	const infService = new InfService();
	const navigate = useNavigate();
		return (
			<ItemList
				getData={infService.getBooks}
				onSelected={(itemId) => navigate(`/books/${itemId}`)
				}
				selectedItem={null}
				itemValues={(item) => item.name}
			/>
		);
}

export default BooksPage;
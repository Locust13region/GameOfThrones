import React from "react";
import { ItemDetails, Field } from "../itemDetails";	
import InfService from "../../services";
import { useParams } from "react-router-dom";

const Book = () => {
	const {selectedBook} =  useParams();
	const getData = new InfService();

	return (
				<ItemDetails
					getData={getData.getBook}
					selectedItem={selectedBook}
					itemValues={(item) => item.name}
				>
					<Field label={"Publiser"} value={(item) => item.publiser} />
					<Field label={"Released"} value={(item) => item.released} />
					<Field
						label={"Number of pages"}
						value={(item) => item.numberOfPages}
					/>
				</ItemDetails>
	);
};

export default Book;

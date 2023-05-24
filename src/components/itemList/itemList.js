import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const List = styled.ul`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 10px;
`;

const Item = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(0, 0, 0, 0.125);
	cursor: pointer;
	border-radius: 10px;
`;

const ItemList = ({ getData, onSelected, selectedItem, itemValues }) => {
	const [itemList, updateList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		getData()
			.then((itemList) => {
				updateList(itemList);
				setLoaded(true);
			})
			.catch((e) => {
				setLoaded(true);
				setError(true);
				console.log(`error during fetch random character ${e}`);
			});
	}, []);

	function renderList(arr) {
		return arr.map((item) => {
			return (
				<Item
					key={item.id}
					style={{
						color: selectedItem === item.id ? "white" : "black",
						background: selectedItem === item.id ? "#444C5C" : "white",
					}}
					onClick={() => {
						onSelected(item.id);
					}}
				>
					{itemValues(item)}
				</Item>
			);
		});
	}

	const spinner = !loaded || !itemList ? <Spinner /> : null;
	const errorMessage = error ? <ErrorMessage /> : null;
	const content = loaded && !error ? renderList(itemList) : null;

	return (
		<List>
			{spinner}
			{errorMessage}
			{content}
		</List>
	);
};

export default ItemList;

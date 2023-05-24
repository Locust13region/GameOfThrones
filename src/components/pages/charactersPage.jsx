import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import {ItemDetails} from "../itemDetails";
import InfService from "../../services";
import ErrorMessage from "../errorMessage";
import { Field } from "../itemDetails/itemDetails"

export default class CharactersPage extends Component {
	state = {
		error: false,
		selectedItem: null,
	};

	InfService = new InfService();

	componentDidCatch(error, info) {
		console.log(error, info);
		this.setState({ error: true });
	}

	onSelected = (id) => {
		this.setState({selectedItem: id})
	}
	render() {
		if (this.error) {
			return <ErrorMessage />;
		}

		return (
			<Row>
				<Col md="6">
					<ItemList
						getData={this.InfService.getCharacters}
						onSelected={this.onSelected}
						selectedItem={this.state.selectedItem}
						itemValues={item => item.name}
					/>
				</Col>
				<Col md="6">
					<ItemDetails
						getData={this.InfService.getCharacter}
						selectedItem={this.state.selectedItem}
						itemValues={item => item.name}
					>
						<Field label={"Gender"} value={item => item.gender}/>
						<Field label={"Born"} value={item => item.born}/>
						<Field label={"Died"} value={item => item.died}/>
						<Field label={"Culture"} value={item => item.culture}/>
					</ItemDetails>
				</Col>
			</Row>
		);
	}
}

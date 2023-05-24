import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import {ItemDetails} from "../itemDetails";
import InfService from "../../services";
import ErrorMessage from "../errorMessage";
import { Field } from "../itemDetails/itemDetails"

export default class HousesPage extends Component {
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
						getData={this.InfService.getHouses}
						onSelected={this.onSelected}
						selectedItem={this.state.selectedItem}
						itemValues={item => item.name}
					/>
				</Col>
				<Col md="6">
					<ItemDetails
						getData={this.InfService.getHouse}
						selectedItem={this.state.selectedItem}
						itemValues={item => item.name}
					>
						<Field label={"Region"} value={item => item.region}/>
						<Field label={"Words"} value={item => item.words}/>
						<Field label={"Titles"} value={item => item.titles}/>
						<Field label={"Overlord"} value={item => item.overlord}/>
						<Field label={"Ancestral weapons"} value={item => item.ancestralWeapons}/>
					</ItemDetails>
				</Col>
			</Row>
		);
	}
}

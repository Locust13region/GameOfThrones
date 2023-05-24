import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Header from "../header";
import {RandomCharRender} from "../randomChar"
import { Outlet } from "react-router-dom";
import ErrorMessage from "../errorMessage";
import "./layout.css";

export default class Layuot extends Component {
	state = {
		toggleRandomBlock: true,
		error: false,
	};

	componentDidCatch(error, info) {
		console.log("eggog", error, info);
		this.setState({ error: true });
	}		

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}
		const { toggleRandomBlock } = this.state;

		return (
			<div className="app">
				<Container>
					<Header />
				</Container>
				<Container>
					{toggleRandomBlock ? <RandomCharRender /> : null}
					<Button
						color="primary"
						style={{ marginBottom: 40 }}
						onClick={() => {
							this.setState(() => {
								return { toggleRandomBlock: !toggleRandomBlock };
							});
						}}
					>
						Скрыть Random
					</Button>
					<Outlet />
				</Container>
			</div>
		);
	}
}

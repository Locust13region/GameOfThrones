import React, { Component } from "react";
import styled from "styled-components";
import InfService from "../../services";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const RandomBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	border-radius: 10px;
`;
const RandomBlockTitle = styled.h5`
	margin-bottom: 20px;
	text-align: center;
`;
const RandomBlockList = styled.ul`
	display: flex;
	flex-direction: column;
`;
const RandomBlockItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(0, 0, 0, 0.125);
`;
const RandomBlockLabel = styled.span`
	font-weight: bold;
`;
const RandomBlockValue = styled.span``;

export default class RandomChar extends Component {
	state = {
		char: {},
		loaded: false,
		error: false,
	};

	infservice = new InfService();

	onLoaded = (char) => {
		this.setState({char, loaded: true})
	}

	updateChar() {
		const min = 238;
		const max = 338;
		const randomID = Math.floor(Math.random() * (max - min + 1) + min);
		this.infservice.getCharacter(randomID)
		.then(this.onLoaded)
		.catch((e) => { this.setState({ loaded: true, error: true });
			console.log(`error during fetch random character ${e}`);
			clearInterval(this.timerID) 
		});
	}

	componentDidMount(){
		this.timerID = setInterval(() => {
			this.updateChar();
		}, 1500);
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	};
	componentDidCatch(error, info) {
		console.log(error, info);
		this.setState({ error: true });
	}

	render() {
		const { char, loaded, error } = this.state
		const spinner = !loaded ? <Spinner /> : null;
		const errorMessage = error ? <ErrorMessage /> : null;
		const content = loaded && !error ? <RenderRandom data={char} /> : null;
		return (
			<RandomBlock>
				{spinner}
				{errorMessage}
				{content}
			</RandomBlock>
		);
	}
}

const RenderRandom = ({data: {name, gender, born, died, culture}}) => {
	return (
		<>
			<RandomBlockTitle>Random Character: {name}</RandomBlockTitle>
			<RandomBlockList>
				<RandomBlockItem>
					<RandomBlockLabel>Gender </RandomBlockLabel>
					<RandomBlockValue>{gender}</RandomBlockValue>
				</RandomBlockItem>
				<RandomBlockItem>
					<RandomBlockLabel>Born </RandomBlockLabel>
					<RandomBlockValue>{born}</RandomBlockValue>
				</RandomBlockItem>
				<RandomBlockItem>
					<RandomBlockLabel>Died </RandomBlockLabel>
					<RandomBlockValue>{died}</RandomBlockValue>
				</RandomBlockItem>
				<RandomBlockItem>
					<RandomBlockLabel>Culture </RandomBlockLabel>
					<RandomBlockValue>{culture}</RandomBlockValue>
				</RandomBlockItem>
			</RandomBlockList>
		</>
	);
};

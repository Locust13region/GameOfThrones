import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const DetaledBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	border-radius: 10px;
`;
const DetaledBlockTitle = styled.h4`
	background-color: #fff;
	margin-bottom: 20px;
	text-align: center;
`;
const SelectItem = styled.h5`
	background-color: #fff;
	margin-bottom: 20px;
	text-align: left;
	padding: 0.75rem 1.25rem;
	border-radius: 10px;
`;
const DetaledBlockList = styled.ul`
	display: flex;
	flex-direction: column;
`;
const DetaledBlockItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(0, 0, 0, 0.125);
`;
const DetaledBlockLabel = styled.span`
	font-weight: bold;
`;
const DetaledBlockValue = styled.span``;

export default class ItemDetails extends Component {
	state = {
		item: {},
		loaded: false,
		error: false,
	};

	updateData(requestData, idItem){
		requestData(idItem)
		.then((item) => {
			this.setState({ item, loaded: true });
		})
		.catch((e) => {
			this.setState({ loaded: true, error: true });
			console.log(`error during fetch random character ${e}`);
		});

	};

	componentDidMount() {
		const { selectedItem, getData } = this.props;
		if (!selectedItem) {
			return;
		}
		this.updateData(getData, selectedItem)

	}
	componentDidUpdate(prevProps) {
		const { selectedItem, getData } = this.props;
		if (!selectedItem || prevProps.selectedItem === selectedItem) {
			return;
		}
		this.updateData(getData, selectedItem)
	}
	componentDidCatch(error, info) {
		console.log(error, info);
		this.setState({ error: true });
	}

	renderDetaledBlock = () => {
		const { itemValues, children } = this.props;
		const { item } = this.state;
		return (
			<DetaledBlock>
				<DetaledBlockTitle>{itemValues(item)}</DetaledBlockTitle>
				<DetaledBlockList>
					{React.Children.map(children, (child) => {
						return (
							<Field
								label={child.props.label}
								value={child.props.value(item)}
							/>
						);
					})}
				</DetaledBlockList>
			</DetaledBlock>
		);
	};

	render() {
		const { item, error, loaded } = this.state;

		const spinner = !loaded || !item ? <Spinner /> : null;
		const errorMessage = error ? <ErrorMessage /> : null;
		const content = loaded && !error ? this.renderDetaledBlock(item) : null;
		if (!item.name) {
			return <SelectItem>Please select item</SelectItem>;
		}
		return (
			<>
				{spinner}
				{errorMessage}
				{content}
			</>
		);
	}
}

const Field = ({ label, value }) => {
	return (
		<DetaledBlockItem>
			<DetaledBlockLabel>{label}</DetaledBlockLabel>
			<DetaledBlockValue>{value}</DetaledBlockValue>
		</DetaledBlockItem>
	);
};

export { Field };

import React from "react";
import { Col, Row } from "reactstrap";
import RandomChar from "./randomChar"

const RandomCharRender = () => {
	return (
		<Row>
			<Col lg={{ size: 5, offset: 0 }}>
				<RandomChar />
			</Col>
		</Row>
	);
};

export default RandomCharRender;
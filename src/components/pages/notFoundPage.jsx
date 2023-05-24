import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFouundBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	border-radius: 1%;
`;
const NotFoundPage = () => {
	return (
			<Row>
				<Col lg={{ size: 5, offset: 0 }}>
					<NotFouundBlock>
						<h4>Page does not exist</h4>
						<Link to="/">Main page</Link>
					</NotFouundBlock>
				</Col>
			</Row>
	);
};

export default NotFoundPage;

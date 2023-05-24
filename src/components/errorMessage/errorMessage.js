import React from "react";
import errImg from "./err.webp"

const ErrorMessage = () => {
	return(
		<>
			<span style={{textAlign: "center"}}>
				Error occurred during database access
			</span>
			<img src={errImg} style={{marginBottom: 20, width: "100%"}} alt="Error"/>
		</>

	)
}

export default ErrorMessage;
import React from "react";
const ret = () => {
	return (
		<>
			<View
				setStart={setStart}
				setFinish={setFinish}
				setEnd={setEnd}
				column={column}
				row={row}
				selectToggle={selectToggle}
				collec={collec}
			/>
			<NewFoo
				select={select}
				wer={wer}
				consolelogdetailed={consolelogdetailed}
				cryptoProvider={cryptoProvider}
			/>
			<span> Foo Bar</span>
		</>
	);
};

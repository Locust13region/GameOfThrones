import React from "react";

const test = () => {
	return (
		<TodoList
			todos={todos}
			toggleTodoComplete={toggleTodoComplete}
			removeTodo={removeTodo}
		/>
	);
};

export { test };

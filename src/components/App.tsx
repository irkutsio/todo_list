import { useState } from 'react';
import { NewTodo } from './components/NewTodo';
import { TodosSidebar } from './components/TodosSidebar';
import { SelectedTodo } from './components/SelectedTodo';
import { NoTodoSelected } from './components/NoTodoSelected';

function App() {
	const [todoState, setTodoState] = useState({
		selectedId: undefined,
		todos: [],
});

	const handleSelectTodo = id => {
		setTodoState(prev => {
			return {
				...prev,
				selectedId: id,
			};
		});
	};

	const handlStartTodo = () => {
		setTodoState(prev => {
			return {
				...prev,
				selectedId: null,
			};
		});
	};

	const handleAddTodo = todoData => {
		const id = Math.random();
		const newTodo = {
			...todoData,
			id,
		};
		setTodoState(prev => {
			return {
				...prev,
				selectedId: undefined,
				todos: [...prev.todos, newTodo],
			};
		});
	};

	const handleCancelAddTodo = () => {
		setTodoState(prev => {
			return {
				...prev,
				selectedId: undefined,
			};
		});
	};

	const handleDeleteTodo = () => {
		setTodoState(prev => {
			return {
				...prev,
				selectedId: undefined,
				todos: prev.todos.filter(todo => todo.id !== prev.selectedId),
			};
		});
	};

	
	const handleChangeCompleted = () => {
		setTodoState(prev => {
			console.log(prev)
			return {
				...prev,
				todos: prev.todos.map(todo => {
					if (todo.id === prev.selectedId) {
						return {
							...todo,
							completed: !todo.completed 
						};
					}
					return todo;
				})
			};
		});
	
	};


	const selectedTodo = todoState.todos.find(todo => todo.id === todoState.selectedId);

	let content = <SelectedTodo todo={selectedTodo} onDelete={handleDeleteTodo} onChangeCompleted={handleChangeCompleted}/>;
	if (todoState.selectedId === null) {
		content = <NewTodo onAdd={handleAddTodo} onCancel={handleCancelAddTodo} />;
	} else if (todoState.selectedId === undefined) {
		content = <NoTodoSelected onStartAddTodo={handlStartTodo} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<TodosSidebar
				onStartAddTodo={handlStartTodo}
				todos={todoState.todos}
				onSelectTodo={handleSelectTodo}
				selectedTodoId={todoState.selectedId}
			/>
			{content}
		</main>
	);
}


export default App

import noTodoImg from '../../assets/no-todo.png';
import { Button } from './Button';

export const NoTodoSelected = ({onStartAddTodo}) => {
	return (
		<div className="mt-24 text-center w-2/3">
			<img className="w-16 h-16 object-contain mx-auto" src={noTodoImg} alt="An empty task list" />
			<h2 className="text-xl font-bold text-stone-500 my-4">No Task Selected</h2>
			<p className="text-stone-400 mb-4">Select a task or get started with a new one</p>
			<p className="mt-8">
				<Button onClick={onStartAddTodo}>Create new task</Button>
			</p>
		</div>
	);
};

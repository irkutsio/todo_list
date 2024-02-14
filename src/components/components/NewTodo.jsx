import { useRef } from 'react';
import { Input } from './Input';
import { ErrorModal } from './ErrorModal';

export const NewTodo = ({ onAdd, onCancel }) => {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	const modal = useRef();

	const handleSave = () => {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === '') {
			modal.current.open();
			return;
		}
		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
			completed: false
		});
	};

	return (
		<>
			<ErrorModal ref={modal} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
				<p className="text-stone-400 mb-4">Ooops...looks like you forgot to enter a value</p>
			</ErrorModal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input label="Title" type="text" ref={title} />
					<Input label="Description" textarea ref={description} />
					<Input label="Due Date" type="date" ref={dueDate} />
				</div>
			</div>
		</>
	);
};

import { useState } from 'react';
import { Button } from './Button';


export const SelectedTodo = ({ todo, onDelete, onChangeCompleted}) => {
    const formatedDate = new Date(todo.dueDate).toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="w-[35rem] mt-16">
            <div className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{todo.title}</h1>
                    <Button onClick={onDelete}>delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{formatedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{todo.description}</p>
            </div>
            <Button onClick={onChangeCompleted}>{!todo.completed ? 'Complete...' : 'Completed'}</Button>
        </div>
    );
};

export default SelectedTodo;

import React, { useState } from 'react';
import { MdOutlineDone, MdOutlineDoneAll } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import Loading from './Loading';

const Task = ({ task, refetchUndone, refetchDone }) => {
    const { title, description, _id, isDone } = task;
    const [isLoading, setIsLoading] = useState(false);

    const handleDone = decision => {
        fetch(`https://task-manager-server-kpxv2gmhs-safwanbin2.vercel.app/tasks?id=${_id}&isDone=${decision}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetchDone();
                    refetchUndone();
                    return toast.success("Status updated")
                }
                return toast.error("Status updating error")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleDelete = id => {
        const consent = window.confirm("Are you sure you want to delete the task?");
        if (consent) {
            setIsLoading(true);
            fetch(`https://task-manager-server-kpxv2gmhs-safwanbin2.vercel.app/tasks?id=${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        setIsLoading(false)
                        refetchDone();
                        refetchUndone();
                        return toast.success("Task Deleted Successfully");
                    }
                    setIsLoading(false)
                    toast.error("Failed to delete task");
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="card bg-accent shadow-2xl my-4 p-4">
            <div className={`${isDone && "border-green-600"} border-b-2 pb-2 flex justify-between items-center`}>
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center'>
                    {
                        isDone ? <button onClick={() => handleDone(false)}
                            title='Mark as undone'
                            className='text-2xl p-4 rounded-full hover:bg-base-100 cursor-pointer text-green-600 transition-all  duration-300'><MdOutlineDoneAll /></button>
                            : <button onClick={() => handleDone(true)}
                                title='Mark as done'
                                className='text-2xl p-4 rounded-full hover:bg-base-100 cursor-pointer hover:text-primary transition-all duration-300'><MdOutlineDone /></button>
                    }
                    <button onClick={() => handleDelete(_id)}
                        title='Delete Task' className='text-2xl p-4 rounded-full hover:bg-base-100 cursor-pointer hover:text-red-600 transition-all'><AiOutlineDelete /></button>
                </div>
            </div>
            <div className='py-8'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Task;
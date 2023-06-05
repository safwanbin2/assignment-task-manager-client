import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleAddTask = data => {
        const newTask = {
            title: data.title,
            description: data.description,
            isDone: false
        }
        fetch(`https://task-manager-server-kpxv2gmhs-safwanbin2.vercel.app/tasks`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Task added successfully");
                    return navigate('/tasks')
                }
                return toast.error("Could not add task");
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <h2 className='text-base md:text-xl text-primary'>Add New Task: </h2>
            <form onSubmit={handleSubmit(handleAddTask)} className="card bg-accent shadow-2xl my-4 p-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input {...register('title', {
                        required: "Can not be empty"
                    })} type="text" placeholder="title" className="input input-bordered" />
                    {errors.title && <span className="label-text text-red-700">{errors.title.message}</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input {...register('description', {
                        required: "Can not be epmty"
                    })} type="text" placeholder="Description" className="input input-bordered input-lg h-[8rem]" />
                    {errors.description && <span className="label-text text-red-700">{errors.description.message}</span>}
                </div>
                <button type='submit' className='btn btn-primary mt-4'>Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
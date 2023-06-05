import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Components/Loading';
import Task from '../../Components/Task';

const Tasks = () => {
    const { data: tasksUndone, isLoading: isLoadingUndone, refetch: refetchUndone } = useQuery({
        queryKey: ["undone"],
        queryFn: async () => {
            const res = await fetch(`https://task-manager-server-kpxv2gmhs-safwanbin2.vercel.app/tasks?filter=undone`);
            const data = await res.json();
            return data;
        }
    })

    const { data: tasksDone, isLoading: isLoadingDone, refetch: refetchDone } = useQuery({
        queryKey: ["done"],
        queryFn: async () => {
            const res = await fetch(`https://task-manager-server-kpxv2gmhs-safwanbin2.vercel.app/tasks?filter=done`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoadingUndone || isLoadingDone) {
        return <Loading />
    }

    return (
        <div>
            <h3 className='text-base md:text-xl text-primary'>Pending: </h3>
            {
                tasksUndone.length ? tasksUndone.map(task => <Task
                    key={task._id}
                    task={task}
                    refetchUndone={refetchUndone}
                    refetchDone={refetchDone}
                />) 
                : <h2 className='text-xl my-4'>* No tasks pending</h2>
            }
            <h3 className='text-base md:text-xl text-primary'>Done: </h3>
            {
                tasksDone.length ? tasksDone.map(task => <Task
                    key={task._id}
                    task={task}
                    refetchUndone={refetchUndone}
                    refetchDone={refetchDone}
                />)
                : <h2 className='text-xl my-4'>* No tasks are done</h2>
            }
        </div>
    );
};

export default Tasks;
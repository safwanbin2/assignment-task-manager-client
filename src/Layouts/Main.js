import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <section>
            <Navbar />
            <section className='w-[95%] md:w-[80%] lg:w-[60%] mx-auto min-h-[80vh]'>
                <div className='my-6'>
                    <NavLink className="font-semibold tracking-wider text-base md:text-xl me-4 focus:border-b-2 focus:border-primary" to='/tasks'>Tasks</NavLink>
                    <NavLink className="font-semibold tracking-wider text-base md:text-xl ms-4 focus:border-b-2 focus:border-primary" to='/addtask'>Add Task</NavLink>
                </div>
                <Outlet />
            </section>
            <Footer />
        </section>
    );
};

export default Main;
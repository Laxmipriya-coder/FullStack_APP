import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div className='flex justify-center items-center gap-2 min-h-screen'>
                <Link to={"/"}>
                    <button className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-purple-200 hover:-translate-y-1 transition">Navigate to Home page</button>
                </Link>
                <h1>Welcome to dashboard...........</h1>
            </div>
        </>
    )
}

export default Dashboard
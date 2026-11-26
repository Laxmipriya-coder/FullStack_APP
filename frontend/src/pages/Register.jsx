import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        age: "",
        gender: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.age || !formData.gender || !formData.email || !formData.password) {
            toast.error("Please fill all fields", {
                position: "top-center"
            });
            return;
        }
        console.log("Registration Details:", formData);

        toast.success("Registration Successful!", {
            position: "top-center"
        });

        setFormData({
            username: "",
            age: "",
            gender: "",
            email: "",
            password: ""
        })

    }

    return (
        <>
            <div className='bg-gray-400 h-screen flex justify-center items-center'>
                <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-100">
                    <h1 className='text-3xl font-bold text-center mb-2 text-blue-600'>
                        Registration Form
                    </h1>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        {/* User Name */}
                        <div className='flex flex-col gap-2 '>
                            <label>User Name</label>
                            <input type="text" name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                placeholder='Enter your User Name' />
                        </div>

                        {/* Age */}
                        <div className='flex flex-col gap-2 '>
                            <label>Age</label>
                            <input type="number" name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                placeholder='Enter your age ' />
                        </div>

                        {/* Gender */}
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full py-3 rounded-lg">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        {/* Email Id */}
                        <div className='flex flex-col gap-2 '>
                            <label>Email ID </label>
                            <input type="email" name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                placeholder='Enter your email id' />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-2 '>
                            <label>Password</label>
                            <input type="password" name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                placeholder='Enter your password' />
                        </div>
                        <input type="submit" value="Create Account"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer shadow-md" />
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />
        </>
    )
}

export default Register;

import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error("Please fill all fields", {
                position: "top-center"
            });
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters", {
                position: "top-center"
            });
            return;
        }

        console.log("Login Details:", formData);

        toast.success("Login Successful!", {
            position: "top-center"
        });

        setFormData({
            email: "",
            password: ""
        });
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">

                <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-100">

                    <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">
                        Welcome Back!
                    </h1>

                    <p className="text-center text-gray-500 mb-6">
                        Login to your account
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email ID</label>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Submit Button */}
                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer shadow-md"
                        />

                    </form>

                    <p className="text-center text-gray-500 mt-5">
                        Don't have an account?
                        <span className="text-blue-600 font-semibold cursor-pointer ml-1">
                            Register
                        </span>
                    </p>

                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />
        </>
    );
}

export default Login;

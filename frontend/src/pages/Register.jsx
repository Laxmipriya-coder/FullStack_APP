import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8090/v1/register",
        formData,
      );
      setFormData({
        username: "",
        age: "",
        email: "",
        gender: "",
        password: "",
      });
      toast.success(data.message,{position:"top-center"})
    } catch (error) {
      toast.error(error.message,{position:"top-center"})
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-slate-100 px-4 py-10"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl
        shadow-xl shadow-slate-200/60 p-8 sm:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 bg-blue-600 rounded-2xl
            flex items-center justify-center mx-auto mb-4
            shadow-lg shadow-blue-600/20"
          >
            <span className="text-white text-2xl font-bold">N</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

          <p className="text-slate-500 text-sm mt-2">
            Fill in your details to get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleForm} className="space-y-5">
          {/* Username */}
          <div>
            <label
              className="block text-sm font-semibold
              text-slate-700 mb-2"
            >
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInput}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-xl
                border border-slate-200 bg-slate-50
                text-sm outline-none transition
                focus:bg-white focus:border-blue-500
                focus:ring-4 focus:ring-blue-500/10
                placeholder:text-slate-400"
            />
          </div>

          {/* Age and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-semibold
                text-slate-700 mb-2"
              >
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInput}
                placeholder="Enter age"
                className="w-full px-4 py-3 rounded-xl
                  border border-slate-200 bg-slate-50
                  text-sm outline-none transition
                  focus:bg-white focus:border-blue-500
                  focus:ring-4 focus:ring-blue-500/10
                  placeholder:text-slate-400"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold
                text-slate-700 mb-2"
              >
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleInput}
                className="w-full px-4 py-3 rounded-xl
                  border border-slate-200 bg-slate-50
                  text-sm text-slate-600 outline-none
                  transition focus:bg-white
                  focus:border-blue-500
                  focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-semibold
              text-slate-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl
                border border-slate-200 bg-slate-50
                text-sm outline-none transition
                focus:bg-white focus:border-blue-500
                focus:ring-4 focus:ring-blue-500/10
                placeholder:text-slate-400"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-sm font-semibold
              text-slate-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 rounded-xl
                border border-slate-200 bg-slate-50
                text-sm outline-none transition
                focus:bg-white focus:border-blue-500
                focus:ring-4 focus:ring-blue-500/10
                placeholder:text-slate-400"
            />

            <p className="text-xs text-slate-400 mt-2">
              Use at least 8 characters for better security.
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-blue-600" />

            <p className="text-sm text-slate-500">
              I agree to the{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Register Button */}
          <button
            className="w-full py-3.5 bg-blue-600
              hover:bg-blue-700 text-white rounded-xl
              font-semibold text-sm shadow-lg
              shadow-blue-600/20 transition-all
              active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-7">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600
              font-semibold hover:text-blue-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
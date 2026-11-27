import axios from "axios";
import React, { useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const navigate= useNavigate()
  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:8090/v1/login", formData)
      toast.success(data.message, { position: "top-center" })
      navigate("/dashboard")
    } catch (error) {
      toast.error(error.message, { position: "top-center" })
    }
  }


  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-purple-700 via-purple-600 to-pink-500
    relative overflow-hidden items-center justify-center p-16">

        <div className="absolute w-96 h-96 bg-blue-600/30
      rounded-full blur-3xl -top-20 -left-20" />

        <div className="absolute w-96 h-96 bg-indigo-500/20
      rounded-full blur-3xl bottom-0 right-0" />

        <div className="relative z-10 max-w-lg">

          <div className="flex items-center gap-3 mb-16">
            <div className="w-11 h-11 rounded-xl bg-white text-pink-400
          flex items-center justify-center  
          text-xl font-bold shadow-lg shadow-blue-600/30">
              T
            </div>
            <Link to={"/"} className="text-white text-2xl font-bold">
              Time<span className="text-pink-400">Pass</span>
            </Link>
          </div>

          <h1 className="text-5xl font-bold text-white
        leading-tight mb-6">
            Welcome back to a world of connections.
          </h1>

          <p className=" text-white text-lg leading-relaxed">
            Share your moments, connect with friends, discover
            new people, and make every moment worth remembering.
          </p>

          <div className="mt-12 p-6 rounded-2xl border
        border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-slate-300 leading-relaxed">
              "A place where every moment becomes a memory
              and every connection brings people closer."
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full bg-white text-violet-500  flex items-center
            justify-center font-bold">
                TP
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Time Pass Community
                </p>
                <p className="text-white text-xs">
                  Share. Connect. Explore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 items-center
    justify-center px-6 py-12">

        <div className="w-full max-w-md">

          <div className="lg:hidden flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-600
          flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="text-2xl font-bold text-slate-900">
              Time<span className="text-blue-600">Pass</span>
            </span>
          </div>

          <div className="mb-9">
            <h2 className="text-3xl font-bold text-slate-900
          tracking-tight">
              Welcome back
            </h2>
            <p className="text-slate-500 mt-2">
              Sign in to connect with your people and explore what's new.
            </p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center
        gap-3 border border-slate-200 bg-white rounded-xl
        py-3 text-sm font-semibold text-slate-700
        hover:bg-slate-50 transition">
            <svg width="19" height="19" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22
            9.21 3.6l6.85-6.85C35.9 2.38 30.47 0
            24 0 14.62 0 6.51 5.38 2.56 13.22l7.98
            6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15
            -3.09-.38-4.55H24v9.02h12.94c-.58 2.96
            -2.26 5.48-4.7 7.18l7.19 5.59
            c4.2-3.87 7.55-9.6 7.55-17.24z"/>
              <path fill="#FBBC05" d="M10.53 28.59a14.4
            14.4 0 0 1 0-9.18l-7.98-6.19a24
            24 0 0 0 0 21.56l7.98-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0
            11.93-2.13 15.91-5.8l-7.19-5.59c-2
            1.35-4.55 2.15-8.72 2.15-6.26
            0-11.57-4.22-13.47-9.91l-7.98
            6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Login Form - Original functionality preserved */}
          <form onSubmit={handleForm} className="space-y-5">

            <div>
              <label className="block text-sm font-semibold
            text-slate-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="name@example.com"
                className="w-full px-4 py-3.5 rounded-xl
              border border-slate-200 bg-white
              text-slate-900 text-sm outline-none
              transition placeholder:text-slate-400
              focus:border-blue-500 focus:ring-4
              focus:ring-blue-500/10"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold
              text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold
              text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 rounded-xl
              border border-slate-200 bg-white
              text-slate-900 text-sm outline-none
              transition placeholder:text-slate-400
              focus:border-blue-500 focus:ring-4
              focus:ring-blue-500/10"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2
            text-sm text-slate-600 cursor-pointer">
                <input type="checkbox"
                  className="w-4 h-4 accent-blue-600 rounded" />
                Remember me
              </label>
            </div>

            <button className="w-full bg-linear-to-r from-purple-600 to-pink-500 text-white
          py-3.5 rounded-xl font-semibold text-sm
          shadow-lg shadow-blue-600/20
          cursor-pointer
          hover:shadow-blue-600/30
          active:scale-[0.99] transition-all">
              Sign in to your account
            </button>

          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 font-semibold
          hover:text-blue-700">
              Create an account
            </Link>
          </p>

          <p className="text-center text-xs text-slate-400 mt-12">
            © 2026 Time Pass. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
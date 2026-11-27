import React from 'react'
import { Menu } from "lucide-react"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="h-[78px] flex items-center justify-between px-6 md:px-16 py-5 bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-purple-100">
      <a href="#" className="text-3xl font-black tracking-tight">
        <span className="text-purple-600">Time</span>
        <span className="text-pink-500">Pass.</span>
      </a>

      <div className="hidden md:flex items-center gap-9 text-gray-600 font-medium">
        <a href="#home" className="hover:text-purple-600">Home</a>
        <a href="#features" className="hover:text-purple-600">Features</a>
        <a href="#community" className="hover:text-purple-600">Community</a>
        <a href="#about" className="hover:text-purple-600">About</a>
      </div>

      <div className="flex items-center gap-3">
        <Link to={"/login"} className="hidden sm:block px-5 py-2.5 text-purple-600 font-semibold">
          Log In
        </Link>
        <Link
          to="/register"
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition"
        >
          Join Now
        </Link>
        <button className="md:hidden text-gray-700">
          <Menu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
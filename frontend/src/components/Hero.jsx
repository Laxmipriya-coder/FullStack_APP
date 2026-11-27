import { ArrowRight, Heart, MessageCircle, Play, Send, Sparkles, Star } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 md:px-16 py-20 md:py-28"
    >
      <div className="absolute w-96 h-96 bg-purple-200/40 blur-3xl rounded-full -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-pink-200/40 blur-3xl rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-purple-700 text-sm font-semibold mb-7">
            <Sparkles size={16} />
            YOUR WORLD. YOUR PEOPLE.
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">
            Don't Just
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Pass Time.
            </span>
            Make Moments!
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mt-7 max-w-lg">
            Welcome to Time Pass! A place where you can share
            your moments, connect with friends, discover new
            people, and make every second more interesting.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-purple-200 hover:-translate-y-1 transition">
              Get Started <ArrowRight size={19} />
            </button>

            <button className="flex items-center gap-2 bg-white border border-purple-100 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition">
              <Play size={18} /> Explore
            </button>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-3">
              <img className="w-11 h-11 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/100?img=12" alt="Community member" />
              <img className="w-11 h-11 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/100?img=32" alt="Community member" />
              <img className="w-11 h-11 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/100?img=45" alt="Community member" />
              <img className="w-11 h-11 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/100?img=25" alt="Community member" />
            </div>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-900">Your community</strong>
              <br /> Starts with you!
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-8 bg-gradient-to-br from-purple-300 to-pink-300 blur-3xl opacity-40 rounded-full" />

          <div className="relative bg-white p-4 rounded-[35px] shadow-2xl shadow-purple-200/70 rotate-2 max-w-md w-full">
            <div className="flex items-center justify-between px-2 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Profile" className="rounded-full w-full h-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">alex_morgan</p>
                  <p className="text-xs text-gray-400">Exploring life ✨</p>
                </div>
              </div>
              <span className="font-bold">•••</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"
              alt="Beautiful mountain landscape"
              className="w-full h-72 object-cover rounded-2xl"
            />

            <div className="flex justify-between items-center px-2 py-4">
              <div className="flex gap-5">
                <Heart className="text-pink-500" />
                <MessageCircle className="text-gray-700" />
                <Send className="text-gray-700" />
              </div>
              <Star className="text-gray-700" />
            </div>

            <p className="px-2 text-sm font-bold">2,450 likes</p>
            <p className="px-2 py-2 text-sm text-gray-600">
              Life is better when you explore 🌍
            </p>
          </div>

          <div className="absolute -left-4 md:-left-10 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="bg-pink-100 p-3 rounded-xl">
              <Heart className="text-pink-500" />
            </div>
            <div>
              <p className="font-bold text-sm">New Like!</p>
              <p className="text-xs text-gray-400">Someone loved your post</p>
            </div>
          </div>

          <div className="absolute -right-3 md:-right-8 bottom-16 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-xl">
              <MessageCircle className="text-purple-600" />
            </div>
            <div>
              <p className="font-bold text-sm">New Message</p>
              <p className="text-xs text-gray-400">Hey! What's up? 👋</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
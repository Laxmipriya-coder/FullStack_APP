import { ArrowRight } from 'lucide-react'
import React from 'react'

const Community = () => {
  return (
    <section id="community" className="px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto bg-linear-to-br from-purple-700 via-purple-600 to-pink-500 rounded-[40px] px-8 md:px-16 py-16 text-white overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-50px border-white/10" />

        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-purple-100 uppercase tracking-widest font-bold text-sm">
              Be Part Of Something
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Your People.
              <br /> Your Moments.
              <br /> Your Time Pass.
            </h2>
            <p className="text-purple-100 mt-6 leading-relaxed">
              Start sharing your world today. Find your people,
              express yourself, and turn ordinary moments into
              unforgettable memories.
            </p>
            <button className="mt-9 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Join Our Community <ArrowRight className="inline ml-2" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 rotate-2">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500" alt="Friends together" className="rounded-3xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" alt="Portrait" className="rounded-3xl h-48 w-full object-cover mt-10" />
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500" alt="Portrait" className="rounded-3xl h-48 w-full object-cover -mt-10" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500" alt="Portrait" className="rounded-3xl h-48 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
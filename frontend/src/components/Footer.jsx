import { Globe, Send} from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-950 text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-3xl font-black">
              Time<span className="text-pink-500">Pass.</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-sm">
              Don't Just Pass Time. Make Moments!
              Connect, share, explore, and enjoy life together.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <div className="flex flex-col gap-3 text-gray-400 text-sm">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#community">Community</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4 text-gray-400">
                {/* <Instagram /> */}
                <Globe />
                <Send />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-7 text-center text-gray-500 text-sm">
          © 2026 Time Pass. All rights reserved. Made with ❤️
        </div>
      </div>
    </footer>
  )
}

export default Footer
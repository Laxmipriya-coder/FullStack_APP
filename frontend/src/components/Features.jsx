import React from 'react'
import {Image,Users,MessageCircle,Video, ArrowRight} from "lucide-react"
const Features = () => {
    const features = [
  {
    icon: Image,
    title: "Share Your Moments",
    description:
      "Share your favorite photos and videos with friends and the world.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Users,
    title: "Connect With People",
    description:
      "Find new friends, follow creators, and build your own community.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MessageCircle,
    title: "Chat & Connect",
    description:
      "Chat with friends and keep your conversations alive.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Video,
    title: "Watch & Explore",
    description:
      "Discover entertaining videos, trending content, and new ideas.",
    color: "bg-orange-100 text-orange-600",
  },
];
  return (
    <section id="features" className="px-6 md:px-16 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Everything You Love,
            <span className="text-purple-600"> In One Place.</span>
          </h2>
          <p className="text-gray-500 mt-5">
            More than just a social media app. It's your space
            to express, connect, and enjoy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100 transition group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition`}>
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-bold mt-7 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500 mt-3 leading-relaxed">
                  {feature.description}
                </p>
                <ArrowRight className="mt-6 text-purple-600" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
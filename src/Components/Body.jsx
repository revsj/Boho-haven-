import 'react'
import Taal2 from '../assets/Taal2.jpg'

export default function Body() {
  return (
    <div className="bg-white text-white">
      {/* hero */}
      <section className="relative min-h-svh overflow-hidden">
        <img
          src={Taal2}
          alt="Taal Lake"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text over image. Top padding keeps it clear of the overlaid nav */}
        <div className="relative z-10 mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-4 pb-12 pt-28 text-center sm:pt-32">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Open the curtain and the lake is already there
          </h1>
          <p className="mt-4 text-lg text-white md:text-xl">
            A quiet condo stay for four, made for slow mornings, long views, and nights that run late
          </p>
          <hr className="mt-6 w-24 border-t-2 border-gray-300 md:w-32" />
          <p className="mt-6 text-sm tracking-wide text-white/90 md:text-base">
            Sleeps 4 | King bed + sofa bed | Taal Lake view | Handcrafted welcome bouquet
          </p>
        </div>
      </section>

      {/* The Stay section */}
      <div className="bg-[#2C3626]">
        <div className="max-w-5xl mx-auto px-4 py-12 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Left: The Stay */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#A8BF8E] mb-3">
                The stay
              </h2>
              <hr className="w-16 border-t-2 border-[#6B7F55] mb-6" />

              <p className="text-base md:text-lg text-white leading-relaxed">
                A room that keeps the view in frame. Boho Haven is a smart-room condo unit on the Tagaytay ridge, built around one thing — the window. Wake up to Taal, keep the curtains open through the day, and watch the ridge lights come on at night.
              </p>
              <p className="text-base md:text-lg text-white leading-relaxed mt-4">
                Inside, it's warm and unfussy: soft linen, a king bed, a sofa bed for two more, and enough to do that you may never leave. Cook something. Sing something. Lose at Monopoly. It's yours for the whole stay.
              </p>
            </div>

            {/* Right: What to expect */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What to expect?
              </h3>

              <div className="divide-y divide-white/20">
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-lg font-semibold text-white">Guest:</span>
                  <span className="text-sm text-white/70">4 guests</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-lg font-semibold text-white">Bed:</span>
                  <span className="text-sm text-white/70">King bed + sofa bed</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-lg font-semibold text-white">View:</span>
                  <span className="text-sm text-white/70">Taal Lake</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-lg font-semibold text-white">Kitchen:</span>
                  <span className="text-sm text-white/70">Fully equipped</span>
                </div>
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-lg font-semibold text-white">Wifi:</span>
                  <span className="text-sm text-white/70">High-speed</span>
                </div>
                <div className="py-3">
                  <span className="text-lg font-semibold text-white">Welcome Gift</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
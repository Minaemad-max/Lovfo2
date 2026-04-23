"use client"

import { motion } from "framer-motion"

export default function LetterPage({ setCurrentPage }) {
  const handleContinue = () => {
    setCurrentPage("hug")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-pink-300 mb-8 mt-10 md:mt-0"
        >
          I've been staring at these all night…🌙
        </motion.h2>

        {/* الصور */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -8 + Math.random() * 16, y: 30 }}
              animate={{ opacity: 1, rotate: -3 + Math.random() * 6, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
              }}
              className="relative group cursor-pointer mx-auto"
            >
              <div className="bg-white p-3 rounded-2xl shadow-lg max-w-[200px]">
                
                {/* صورة واحدة لكل كارت */}
                <img
                  src={`/images/${i}.jpg`}
                  alt={`memory ${i}`}
                  className="w-full h-36 object-cover rounded-lg"
                />

                {/* ديكورات */}
                <div className="mt-3 flex justify-center gap-1">
                  <div className="w-8 h-0.5 bg-pink-200"></div>
                  <div className="w-6 h-0.5 bg-purple-200"></div>
                  <div className="w-10 h-0.5 bg-pink-200"></div>
                </div>
              </div>

              {/* شريط فوق */}
              <div
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-6 rounded-md ${
                  i === 1
                    ? "bg-yellow-300"
                    : i === 2
                    ? "bg-green-300"
                    : "bg-blue-300"
                }`}
              ></div>

              {/* ايموجي متحرك */}
              <motion.div
                className="absolute -bottom-2 -left-2 text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {i === 1 ? "🌸" : i === 2 ? "🍃" : "💖"}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-6"
        >
          <p className="text-xl text-purple-200">
            You're so beautiful, but I still hurt you… I'm so sorry.💔
          </p>

          <p className="text-lg text-pink-200 max-w-lg mx-auto">
            Hey my love… I know I really messed up and I hate that I hurt you like this. You didn’t deserve any of what I said or did, wallahi. I’ve been thinking about it nonstop and I feel so bad for making you sad… especially when you mean everything to me.

I’m really, really sorry for upsetting you. I know “sorry” isn’t enough, bas I swear I’ll do better. I don’t ever wanna be the reason behind your tears or your silence.

Please don’t stay mad at me… I miss you, I miss your voice, your laugh, everything about you. You’re too important to me to lose over my stupid mistake.

If you can find it in your heart to forgive me, I promise I’ll make it up to you in every way I can. I love you more than I can explain ❤️

          </p>

          <p className="text-pink-300 text-xl">
            Can you please forgive me…? 💔
          </p>
        </motion.div>

        {/* زرار */}
        <motion.button
          onClick={handleContinue}
          className="mt-10 px-10 py-4 bg-pink-500/30 rounded-full text-white"
        >
          I need you...
        </motion.button>
      </motion.div>
    </div>
  )
}
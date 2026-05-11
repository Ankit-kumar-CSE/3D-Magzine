import React from "react";
import { motion } from "framer-motion";
import { Search, Bell, UserRound } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [focused, setFocused] = useState(false);

  return (
    <nav className="w-full border border-white/10 bg-[#0f172a] px-6 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-xl bg-[#111827] flex items-center justify-center">
                <button><img src="public/images/logo.png" alt="logo" /></button>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-5  font-medium">
            <motion.button 
            // whileHover={{ scale: 1.09 , y:-2}}
            // whileTap={{ scale: 0.96 }}
            onClick={() => window.location.hash = "Home"}
            transition={{ duration: 0.1, spring: { stiffness: 300 } , damping: 18}} 
            className="rounded-xl bg-[#111827] px-5 py-3 transition hover:bg-[#1f2937] border border-transparent hover:border-purple-700 duration-300">
              Home
            </motion.button>

            <motion.button 
            // whileHover={{ scale: 1.09 , y:-2}}
            // whileTap={{ scale: 0.90 }}
            onClick={() => window.location.hash = "Mammals"}
            transition={{ type: "spring", stiffness: 300, damping: 18 }} 
            className="text-gray-300 rounded-xl bg-[#111827] px-5 py-3 transition hover:bg-[#1f2937] hover:text-white border border-transparent hover:border-purple-700 duration-300">
              Mammals
            </motion.button>

            <motion.button 
            // whileHover={{ scale: 1.09 , y:-2}}
            // whileTap={{ scale: 0.90 }}
            onClick={() => window.location.hash = "Birds"}
            transition={{ type: "spring", stiffness: 300, damping: 18 }} 
            className="text-gray-300 rounded-xl bg-[#111827] px-5 py-3 transition hover:bg-[#1f2937] hover:text-white border border-transparent hover:border-purple-700 duration-300">
              Birds
            </motion.button>

            <motion.button 
            // whileHover={{ scale: 1.09 , y:-2}}
            // whileTap={{ scale: 0.90 }}
            onClick={() => window.location.hash = "Insects"}
            transition={{ type: "spring", stiffness: 300, damping: 18 }} 
            className="text-gray-300 rounded-xl bg-[#111827] px-5 py-3 transition hover:bg-[#1f2937] hover:text-white border border-transparent hover:border-purple-700 duration-300">
              Insects
            </motion.button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 ">
          {/* Search Bar */}
          <motion.div
            animate={{
              width: focused ? 550 : 320,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="hidden md:flex items-center gap-3 rounded-xl border border-white/10 bg-[#1e293b] px-4 py-3 w-100  "
          >
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Books"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none "
            />
          </motion.div>

          {/* Notification */}
          <motion.button 
          className="text-gray-300 hover:text-white transition hover:bg-[#1f2937] h-10 w-10 rounded-xl flex items-center justify-center border border-transparent hover:border-purple-700 duration-300">
            <Bell className="h-6 w-6" />
          </motion.button>

          {/* Profile */}
          <motion.button>
            <img
              src="public/images/images.png"
              alt="profile"
              className="h-11 w-11 rounded-full object-cover border border-white/20"
            />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

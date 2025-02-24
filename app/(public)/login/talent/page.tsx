"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Zap, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TalentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Talent login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-4 text-white flex items-center hover:text-sky-200 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="inline-block p-2 bg-white rounded-full shadow-lg"
          >
            <Rocket size={40} className="text-sky-600" />
          </motion.div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Launch Your Career
          </h2>
          <p className="mt-2 text-center text-sm text-purple-200">
            Log in to access exciting opportunities and grow your skills
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-sky-600 hover:text-sky-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700"
                >
                  Log in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="absolute top-20 right-20 text-white opacity-50"
      >
        <Zap size={40} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="absolute bottom-20 left-20 text-white opacity-50"
      >
        <Target size={40} />
      </motion.div>
    </div>
  );
}

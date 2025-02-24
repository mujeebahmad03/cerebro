"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, BarChart, PieChart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BusinessLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-4 text-white flex items-center hover:text-blue-200 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="text-center">
          <motion.div
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block p-2 bg-white rounded-full shadow-lg"
          >
            <Briefcase size={40} className="text-blue-600" />
          </motion.div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Empower Your Business
          </h2>
          <p className="mt-2 text-center text-sm text-blue-200">
            Log in to access powerful tools and insights
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Business Email
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
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
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
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute top-20 right-20 text-white opacity-50"
      >
        <BarChart size={40} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute bottom-20 left-20 text-white opacity-50"
      >
        <PieChart size={40} />
      </motion.div>
    </div>
  );
}

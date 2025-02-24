"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, Briefcase, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useModalStore } from "@/store";

type UserType = "talent" | "business" | "mentor";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}

export function UserTypeModal({ isOpen, onClose, mode }: UserTypeModalProps) {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);

  const { closeAllModals } = useModalStore();

  const userTypes: {
    type: UserType;
    title: string;
    description: string;
    icon: React.ElementType;
  }[] = [
    {
      type: "talent",
      title: "Talent",
      description: "Find opportunities and grow your career",
      icon: User,
    },
    {
      type: "business",
      title: "Business",
      description: "Hire top talent and grow your business",
      icon: Briefcase,
    },
    {
      type: "mentor",
      title: "Mentor",
      description: "Share your expertise and guide others",
      icon: Users,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white z-0" />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-neutral-800">
                  {mode === "login" ? "Log in" : "Sign up"} as
                </h2>
                <button
                  onClick={onClose}
                  className="text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                {userTypes.map((userType) => (
                  <motion.div
                    key={userType.type}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedType === userType.type
                        ? "bg-primary-100 border-2 border-primary-500 shadow-md"
                        : "bg-white border-2 border-neutral-200 hover:border-primary-300 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedType(userType.type)}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${
                          selectedType === userType.type
                            ? "bg-primary-200"
                            : "bg-neutral-100"
                        }`}
                      >
                        <userType.icon
                          size={24}
                          className={`${
                            selectedType === userType.type
                              ? "text-primary-600"
                              : "text-neutral-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-800">
                          {userType.title}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          {userType.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={selectedType ? `/${mode}/${selectedType}` : "#"}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-white font-medium text-lg transition-all ${
                    selectedType
                      ? "bg-sky-500 hover:bg-sky-600 shadow-md hover:shadow-lg"
                      : "bg-neutral-300 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    closeAllModals();
                    if (!selectedType) e.preventDefault();
                  }}
                >
                  Continue
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

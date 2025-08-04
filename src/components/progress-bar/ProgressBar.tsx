"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0–100
  text?: string;
}

export default function ProgressBar({ value, text }: ProgressBarProps) {
  const displayText = text ?? `${value}%`;

  return (
    <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
      {/* Animated progress fill */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-green-500"
        initial={false}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Centered label */}
      <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
        {displayText}
      </div>
    </div>
  );
}

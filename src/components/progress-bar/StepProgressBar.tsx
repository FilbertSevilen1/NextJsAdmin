"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface StepProgressCircleBarProps {
  currentStep: number;
  maxSteps: number;
}

export default function StepProgressCircleBar({
  currentStep,
  maxSteps,
}: StepProgressCircleBarProps) {
  const steps = Array.from({ length: maxSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between w-full mx-auto">
      {steps.map((step, index) => {
        const isActive = step <= currentStep;
        const isFilledLine = step < currentStep;

        return (
          <React.Fragment key={step}>
            {/* Circle */}
            <motion.div
              layout
              initial={false}
              animate={{
                backgroundColor: isActive ? "#22c55e" : "#d1d5db",
                color: isActive ? "#ffffff" : "#4b5563",
              }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm"
              )}
            >
              {step}
            </motion.div>

            {/* Line */}
            {index < steps.length - 1 && (
              <motion.div
                layout
                initial={false}
                animate={{
                  backgroundColor: isFilledLine ? "#22c55e" : "#d1d5db",
                }}
                transition={{ duration: 0.3 }}
                className="flex-1 h-1 mx-2 rounded"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import StepProgressBar from "@/components/progress-bar/StepProgressBar";

export default function ProgressBarTestPage() {
  const [progressBarValue, setProgressBarValue] = useState(50);

  return (
    <div className="grid grid-cols-1 m-8 gap-4">
      <ProgressBar value={progressBarValue} />

      <StepProgressBar currentStep={3} maxSteps={12} />
    </div>
  );
}

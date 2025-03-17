"use client";

import Image from "next/image";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { useState } from "react";
import { Step4 } from "./Step4";
import { StepProvider } from "./StepProvider";

export default function Home() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <StepProvider>
      <div className="h-screen w-screen bg-[#F4F4F4] flex justify-center items-center">
        {step === 0 && (
          <Step1 handleNext={handleNext} handlePrev={handlePrev} />
        )}
        {step === 1 && (
          <Step2 handleNext={handleNext} handlePrev={handlePrev} />
        )}
        {step === 2 && (
          <Step3 handleNext={handleNext} handlePrev={handlePrev} />
        )}
        {step === 3 && (
          <Step4 handleNext={handleNext} handlePrev={handlePrev} />
        )}
      </div>
    </StepProvider>
  );
}

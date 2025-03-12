"use client";

import Image from "next/image";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F4F4F4] flex justify-center items-center">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

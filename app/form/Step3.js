"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { date, z } from "zod";
import { ArrowIcon3 } from "./assets/ArrowIcon3";
import { LeftArrowIcon3 } from "./assets/LeftArrowIcon3";

export const schema = z.object({
  date: z.string().date({ message: "Төрсөн өдрөө оруулна уу." }),
  profileImage: z.any(),
});

export const Step3 = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: "",
      profileImage: "",
    },
  });

  return (
    <div className="bg-white h-[655px] w-[480px] rounded-lg p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <img className="size-[60px]" src="/images/logo.png"></img>
          <p className="text-[26px] font-bold">Join Us! 😎</p>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="flex flex-col">
            <label>
              Date of Birth <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="date"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("date")}
            />
            {formState.errors.date && (
              <div className="text-[#E14942]">
                {formState.errors.date.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Profile image<span className="text-[#E14942]">*</span>
            </label>
            <input
              type="file"
              className="h-[180px] pt-17 px-25 rounded-lg bg-[#7F7F800D]"
              {...register("profileImage")}
            />
            {formState.errors.profileImage && (
              <div className="text-[#E14942]">
                {formState.errors.profileImage.message}
              </div>
            )}
          </div>

          <div className="buttons flex gap-2">
            <button
              type="submit"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] w-[128px] rounded-lg bg-white flex gap-2 justify-center items-center mb-px"
            >
              <LeftArrowIcon3 />
              <p>Back</p>
            </button>
            <button
              type="submit"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg bg-[#121316] w-full text-white flex gap-2 justify-center items-center mb-px"
            >
              Continue <p>2/3</p> <ArrowIcon3 />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

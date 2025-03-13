"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  email: z.string().min(1, { message: "Нэрээ оруулна уу!" }),
  phoneNumber: z.string().min(1, { message: "Овгоо оруулна уу!" }),
  password: z.string().min(1, { message: "Хэрэглэгчийн нэрээ оруулна уу!" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Хэрэглэгчийн нэрээ оруулна уу!" }),
});

export const Step2 = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
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

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(() => {})}>
          <div className="flex flex-col">
            <label>
              Email <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("email")}
            />
            {formState.errors.email && (
              <div className="text-[#E14942]">
                {formState.errors.email.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Phone number <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("lastName")}
            />
            {formState.errors.phoneNumber && (
              <div className="text-[#E14942]">
                {formState.errors.phoneNumber.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Password <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("password")}
            />
            {formState.errors.password && (
              <div className="text-[#E14942]">
                {formState.errors.password.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Confirm Password <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("confirmPassword")}
            />
            {formState.errors.confirmPassword && (
              <div className="text-[#E14942]">
                {formState.errors.confirmPassword.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg bg-[#121316] w-full text-white flex gap-2 justify-center items-center mb-px"
          >
            Continue <p>3</p> <img></img>
          </button>
        </form>
      </div>
    </div>
  );
};

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowIcon2 } from "./assets/ArrowIcon2";
import { LeftArrowIcon2 } from "./assets/LeftArrowIcon2";

export const schema = z.object({
  email: z.string().email({ message: "Зөв мэйл хаяг оруулна уу." }),
  phoneNumber: z
    .string()
    .min(8, { message: "8 оронтой байх ёстой." })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) =>
          ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
        );
      },
      { message: "Зөв утасны дугаар оруулна уу." }
    ),
  password: z.string().min(6, { message: "6 оронтой байх ёстой." }),
  confirmPassword: z
    .string()
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
    }),
});

export const Step2 = (props) => {
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

        <form
          className="flex flex-col gap-3 justify-between"
          onSubmit={handleSubmit(() => {
            props.handleNext();
          })}
        >
          <div className="top">
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
                {...register("phoneNumber")}
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
          </div>

          <div className="buttons flex gap-2">
            <button
              type="submit"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] w-[128px] rounded-lg bg-white flex gap-2 justify-center items-center mb-px"
            >
              <LeftArrowIcon2 />
              <p>Back</p>
            </button>
            <button
              type="submit"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg bg-[#121316] w-full text-white flex gap-2 justify-center items-center mb-px"
            >
              Continue <p>2/3</p> <ArrowIcon2 />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

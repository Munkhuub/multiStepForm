"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowIcon } from "./assets/ArrowIcon";

export const schema = z.object({
  firstName: z.string().min(1, { message: "Нэрээ оруулна уу!" }),
  lastName: z.string().min(1, { message: "Овгоо оруулна уу!" }),
  userName: z.string().min(1, { message: "Хэрэглэгчийн нэрээ оруулна уу!" }),
});

export const Step1 = (props) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
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
          onSubmit={handleSubmit(() => {
            props.handleNext();
          })}
        >
          <div className="flex flex-col">
            <label>
              First name <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("firstName")}
            />
            {formState.errors.firstName && (
              <div className="text-[#E14942]">
                {formState.errors.firstName.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Last name <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("lastName")}
            />
            {formState.errors.lastName && (
              <div className="text-[#E14942]">
                {formState.errors.lastName.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label>
              Username <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              {...register("userName")}
            />
            {formState.errors.userName && (
              <div className="text-[#E14942]">
                {formState.errors.userName.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg bg-[#121316] w-full text-white flex gap-2 justify-center items-center mb-px"
          >
            Continue <p>1/3</p> <ArrowIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

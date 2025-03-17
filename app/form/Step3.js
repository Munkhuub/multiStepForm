"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { date, z } from "zod";
import { ArrowIcon3 } from "./assets/ArrowIcon3";
import { LeftArrowIcon3 } from "./assets/LeftArrowIcon3";
import { ImageIcon } from "./assets/ImageIcon";
import { useContext } from "react";
import { StepContext } from "./StepProvider";

export const schema = z.object({
  date: z.coerce.date().refine((date) => !isNaN(date.getTime()), {
    message: "Төрсөн өдрөө оруулна уу.",
  }),
  profileImage: z.any(),
});

export const Step3 = (props) => {
  const { values, setValues } = useContext(StepContext);
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: values.date,
      profileImage: values.profileImage,
    },
  });
  const [picture, setPicture] = useState(null);
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

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
            const copyOfValues = { ...values };
            copyOfValues.date = data.date;
            copyOfValues.profileImage = data.profileImage;
            setValues(copyOfValues);
            props.handleNext();
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
          <div className="flex flex-col relative h-[208px]">
            <label>
              Profile image<span className="text-[#E14942]">*</span>
            </label>
            <div className="relative w-full h-[180px] bg-[#f2f4f6] rounded-lg border-none">
              <input
                type="file"
                className="h-full w-full absolute top-0 left-0 pt-17 px-25 rounded-lg bg-[#7F7F800D] border-none opacity-0 z-10"
                {...register("profileImage")}
                onChange={onChangePicture}
              />
              <button
                type="button"
                onClick={() => setPicture(null)} // This removes the image
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center z-40"
              >
                ✕
              </button>
              {picture ? (
                <img
                  className="h-[180px] w-[416px] rounded-lg object-contain bg-[#7F7F800D] z-30"
                  src={picture}
                  alt="Uploaded preview"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <p>Upload Image</p>
                  <ImageIcon />
                </div>
              )}
            </div>

            {formState.errors.profileImage && (
              <div className="text-[#E14942]">
                {formState.errors.profileImage.message}
              </div>
            )}
          </div>
          <div className="buttons flex gap-2">
            <button
              type="button"
              onClick={props.handlePrev}
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

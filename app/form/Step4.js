"use client";

export const Step4 = () => {
  return (
    <div className="bg-white h-[183px] w-[480px] rounded-lg p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-col gap-2 h-[129px]">
          <img
            className="ml-[-8px] size-[60px] object-cover"
            src="/images/logo.png"
          ></img>
          <p className="flex items-center text-[26px] font-bold h-[26px]">
            You're All Set 🔥
          </p>
          <p className="flex items-center text-[#8E8E8E] h-[18px]">
            We have received your submission. Thank you!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

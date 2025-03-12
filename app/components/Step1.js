import { useState } from "react";
export const Step1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "Овгоо оруулна уу!",
    userName: "Хэрэглэгчийн нэрээ оруулна уу!",
  });

  const handleButtonClick = () => {
    if (firstName !== "") {
      setError((prev) => {
        return {
          ...prev,
          firstName: "",
        };
      });
    } else {
      setError((prev) => {
        return {
          ...prev,
          firstName: "Нэрээ оруулна уу!",
        };
      });
    }
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

        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label>
              First name <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
              value={firstName}
              onChange={() => setFirstName(event.target.value)}
            />
            <div className="text-[#E14942]">{error.firstName}</div>
          </div>
          <div className="flex flex-col">
            <label>
              Last name <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              id="lName"
              name="lName"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label>
              Username <span className="text-[#E14942]">*</span>
            </label>
            <input
              type="text"
              id="uName"
              name="uName"
              className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg"
            />
          </div>
        </form>
      </div>

      <button
        onClick={handleButtonClick}
        type="submit"
        className="border-[1px] border-solid border-[#CBD5E1] h-[44px] rounded-lg bg-[#121316] w-full text-white flex gap-2 justify-center items-center mb-px"
      >
        Continue <p>3</p> <img></img>
      </button>
    </div>
  );
};

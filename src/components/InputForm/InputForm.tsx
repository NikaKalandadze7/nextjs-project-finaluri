import React from "react";
import { InputFormInterface } from "@/types";

const InputForm: React.FC<InputFormInterface> = ({
  label,
  type,
  handleChange,
  maxLength,
}) => {
  return (
    <div className="max-w-xs w-full pb-2">
      <input
        className="text-sm text-black px-[5px] h-9 border-b-2 border-[#999] bg-transparent drop-shadow-lg  w-full"
        type={type}
        placeholder={label}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputForm;

import React from "react";
interface LabeledInputProps {
  label: string;
  type: string;
  value: any;
  maxLength: number;
  handleChange: (value: string) => void;
  disabled: boolean;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  type,
  handleChange,
  maxLength,
  value,
  disabled,
}) => {
  return (
    <div className="w-full  pb-2">
      <label className="pb-2 text-black text-sm">{label}</label>
      <input
        className="disabled:bg-slate-300 disabled:text-slate-500 text-sm text-black px-[5px] h-12  bg-[#F5F5F5] w-full input input-bordered"
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete="new-password"
      />
    </div>
  );
};

export default LabeledInput;

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (type === "number" && inputValue.length > maxLength) {
      return;
    }
    handleChange(inputValue);
  };

  return (
    <div className="w-full pb-2">
      <label className="pb-2 text-secondary text-sm">{label}</label>
      <input
        className="disabled:bg-slate-300 disabled:text-slate-500 text-sm text-secondary px-[5px] h-12 bg-[#F5F5F5] w-full input input-bordered"
        type={type}
        value={value}
        onChange={handleInputChange}
        maxLength={type !== "number" ? maxLength : undefined}
        disabled={disabled}
        autoComplete="new-password"
      />
    </div>
  );
};

export default LabeledInput;

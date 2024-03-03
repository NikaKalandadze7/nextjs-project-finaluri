import React from "react";

interface InputFormProps {
  label: string;
  size: string;
  buttonAction: () => void;
}

const MainButton: React.FC<InputFormProps> = ({
  label,
  size,
  buttonAction,
}) => {
  return (
    <button
      type="button"
      className={`btn btn-error btn-outline ${size} `}
      onClick={() => buttonAction()}
    >
      {label}
    </button>
  );
};

export default MainButton;

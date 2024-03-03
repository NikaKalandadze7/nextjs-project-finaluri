import React from "react";
import { InfoIcon } from "..";

// Define the props type
interface ErrorPopupProps {
  errorMessage: string;
  closeError: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({
  errorMessage,
  closeError,
}) => {
  return (
    <div
      className=" flex items-center p-2 mb-4 text-base text-red-800 border-red-400 border-2 rounded-lg bg-red-50 bg-transparent dark:text-red-400"
      role="alert"
    >
      <button onClick={closeError} type="button">
        <InfoIcon />
      </button>
      <span className="sr-only">Info</span>
      <div>{errorMessage}</div>
    </div>
  );
};

export default ErrorPopup;

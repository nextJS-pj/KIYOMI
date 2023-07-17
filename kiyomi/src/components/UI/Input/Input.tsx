import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  error: any;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

function Input({
  label,
  type,
  placeholder,
  register,
  error,
  pattern,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <input
        id={label}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        {...register(label, {
          ...(pattern && { pattern }),
        })}
        className={`w-full py-2 px-4 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
      {type === "password" && (
        <button
          className="absolute right-3 top-1/2 transform flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      )}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default Input;

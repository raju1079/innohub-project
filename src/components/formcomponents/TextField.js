import React, { useState } from "react";

const TextField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  validate,
  width
}) => {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (validate) {
      const errorMessage = validate(inputValue);
      setError(errorMessage);
    }

    onChange(e);
  };

  return (
    <div>
      {label && (
        <div className="flex flex-row items-start justify-start gap-[0px_21px] text-base-2 font-semibold font-poppins text-white whitespace-pre-wrap pb-2">
           {label}
        </div>
      )}
      <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] border-[1px] border-solid border-color1">
      <input
         style={{ width: width || '320px' }} // Use width prop or default to '320px'
        className="w-full [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
        disabled={disabled}
        
      />
      {error && (
        <div className="text-red-500 text-xs mt-1">{error}</div>
      )}
    </div>
    </div>
  );
};

export default TextField;

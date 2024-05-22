import React, { useState } from "react";

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  validate,
  width,
  height
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
        <div className="font-semibold font-poppins text-white whitespace-pre-wrap pb-2">
          {label}
        </div>
      )}
      {/* <div className="self-stretch rounded-lg bg-white overflow-hidden"> */}
      <div className="self-stretch rounded-lg bg-white overflow-hidden  flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] ">

        <textarea
          style={{ width: width || '700px', wordWrap: 'break-word' }}
          className="w-full px-0 py-0 rounded-lg h-[65px] bg-transparent text-gray-300 resize-none outline-none placeholder-gray-300 font-poppins relative-mt-[-40px]"
          placeholder={placeholder}
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

export default TextArea;













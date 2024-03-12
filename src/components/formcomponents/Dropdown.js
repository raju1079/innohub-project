import React from "react";

const Dropdown = ({ label, options, value, onChange, placeholder }) => {
  return (

    
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
      <label className="w-[232px] relative font-semibold inline-block z-[1]">
        {label} *
      </label>
      <div className="self-stretch w-full rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] text-xs text-gray-300 border-[1px] border-solid border-color1">
        <div className="relative whitespace-pre-wrap">{placeholder}</div>
        <select
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="w-full [border:none] [outline:none] bg-white self-stretch h-[18px] rounded-lg flex flex-row items-center justify-start pt-3 px-[2px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[320px]"
        >
           <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option> 
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;












/* // Dropdown.js

import React from "react";

const Dropdown = ({ options, onChange, placeholder, value, required,validate }) => {
  const showError = validate && validate(value);

  return (
    <div>
      <select
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[20px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[295px] ${showError ? 'border-red-500' : ''}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showError && (
        <div className="text-red-500 text-xs mt-1">
         
          Error: {validate(value)}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
 */
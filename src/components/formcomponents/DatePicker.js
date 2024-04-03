import React, { useState } from 'react';

const DatePicker = ({ label, value, onChange, required, validate }) => {
  const [error, setError] = useState('');

  const handleDateChange = (event) => {
    const newDateValue = event.target.value;
    onChange(newDateValue);

    if (validate) {
      const errorMessage = validate(newDateValue);
      setError(errorMessage);
    }
  };

  return (
    <div className='container mx-auto mb-15'>
      <label className='mb-1 text-sm flex flex-row items-start justify-start gap-[0px_21px] text-xl font-semibold font-poppins text-white whitespace-pre-wrap pb-2'>
        {label} {required && <span style={{ color: 'white' }}></span>}
      </label>
      <input
        type="date"
        value={value}
        onChange={handleDateChange}
        required={required}
        className={`self-stretch w-full md:w-[320px] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start pt-[13px] px-3.5 pb-3.5 z-[1] border-[1px] border-solid border-color1 ${error ? 'error' : ''}`}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default DatePicker;

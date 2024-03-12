import React, { useState, useEffect } from 'react';

const FileUpload = ({ label, name, onChange, existingFile }) => {
  const [selectedFile, setSelectedFile] = useState(existingFile);

  useEffect(() => {
    // Update the parent component's state when selectedFile changes
    onChange(name, selectedFile);
  }, [selectedFile, name, onChange]);

  const handleFileChange = (event) => {
    const file = event?.target?.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border md:align-right">
      <div className="self-stretch flex-1 rounded-8xs bg-white overflow-hidden flex flex-col items-end justify-end py-11 pr-0 pl-[19px] relative z-[1] border-[2px] border-solid border-white">
        <input
          className="w-[calc(100%-_19px)] [border:none] [outline:none] font-poppins text-xs bg-[transparent] self-stretch h-[18px] relative text-gray-100 text-left inline-block min-w-[83px]"
          placeholder={label}
          name={name}
          type="file"
          accept="image/*" // Restrict to image files
          onChange={handleFileChange}
        />
        {selectedFile && (
          <img
            className="w-[27px] h-[27px] absolute !m-[0] top-[33px] left-[calc(50%-_13.5px)] overflow-hidden shrink-0"
            alt=""
            src={URL.createObjectURL(selectedFile)}
          />
        )}
      </div>
    </div>
  );
};

export default FileUpload;

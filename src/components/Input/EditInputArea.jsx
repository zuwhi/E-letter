import React, { useRef, useEffect } from "react";

export default function EditInputArea({ handleChange, value, name, variant }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustTextareaHeight();
  }, [value]);

  return <textarea ref={textareaRef} name={name} value={value} onChange={handleChange} className={`${variant} outline-none w-full textarea-reset`}></textarea>;
}

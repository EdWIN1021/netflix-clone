"use client";

import { useState } from "react";

export interface TextInputProps {
  label: string;
  color?: string;
  border?: boolean;
  outline?: boolean;
  labelColor?: string;
  forForm?: boolean;
  primary?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, primary }) => {
  const [input, setInput] = useState("");

  return (
    <div className="relative mt-4 sm:flex-1">
      <input
        className={`text-input ${
          primary ? "input-primary " : "input-secondary"
        } peer`}
        type="text"
        name="email"
        value={input}
        onBlur={() => setInput("")}
        onChange={(e) => setInput(e.target.value)}
      />

      <label className={`${primary ? "label-primary" : "label-secondary"}`}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;

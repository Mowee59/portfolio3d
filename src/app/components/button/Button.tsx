import React from "react";

interface ButtonProps {
  label: string;
  withCircle?: boolean;
  containerClass?: string;
}

const Button = ({ label, withCircle = false, containerClass }: ButtonProps) => {
  return (
    <button className={`btn ${containerClass}`}>
      {withCircle && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {label}
    </button>
  );
};

export default Button;

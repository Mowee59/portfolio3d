import React from "react";

interface ButtonProps {
  label: string;
  withCircle?: boolean;
  containerClass?: string;
  href?: string;
}

const Button = ({
  label,
  withCircle = false,
  containerClass,
  href = "",
}: ButtonProps) => {
  return (
    <a href={href}>
      <button className={`btn ${containerClass}`}>
        {withCircle && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        )}
        {label}
      </button>
    </a>
  );
};

export default Button;

import React from "react";
import styles from "./Button.module.css";

const { button, buttonText } = styles;

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & JSX.IntrinsicElements["button"];

export const Button = ({ children, className="", ...props }: ButtonProps) => {
  return (
    <button 
      className={`${button} ${className}`} 
      {...props}
    >
      <span className={buttonText}>{children}</span>
    </button>
  );
};

Button.displayName = "Button";

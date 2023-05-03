import React from "react";

interface IButtonProps {
  children: string;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}: IButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

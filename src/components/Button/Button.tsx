import React from "react";

type ButtonProps = {
  label: string;
  variant: string;
};
function Button({ label, variant }: ButtonProps) {
  const buttonStyle =
    variant === "primary"
      ? "px-6 py-2 rounded-md bg-indigo-200"
      : "px-6 py-2 rounded-md border-solid border-2";

  return (
    <div>
      <div className={buttonStyle}>{label}</div>
    </div>
  );
}

export default Button;

import React from "react";
import Button from "./Button/Button";

function Header() {
  return (
    <div className="m-auto flex justify-between bg-slate-200 px-60 py-5 align-middle ">
      <div className="flex justify-center align-middle">
        <h2 className="flex align-middle font-bold">SLP.INFO</h2>
      </div>
      <div className="flex space-x-3">
        <Button label="Login" variant="secondary" />
        <Button label="Signup" variant="primary" />
      </div>
    </div>
  );
}

export default Header;

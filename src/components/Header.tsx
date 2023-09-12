import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// import Button from "./Button/Button";
import { Button } from "./ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  const { data: sessionData } = useSession();

  return (
    <div className="m-auto flex justify-between bg-slate-50 px-60 py-5 align-middle ">
      <div className="flex items-center justify-center">
        <h2 className="flex align-bottom font-bold">SLP.INFO</h2>
      </div>
      <div className="flex space-x-3">
        <Button
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Logout" : "Login"}
        </Button>
        <Button variant="outline">Sign up</Button>
        <div className="flex items-center rounded-md border border-solid bg-white px-2 py-1">
          <Popover>
            <PopoverTrigger>
              <AddIcon />
            </PopoverTrigger>
            <PopoverContent className="top-2">
              <Link href={`/create`}>Create Post</Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;

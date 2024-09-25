"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
const SignOutButton = ({ text }: Props) => {
  return (
    <Button onClick={() => signOut("github", { callbackUrl: "/" })}>
      {text}
    </Button>
  );
};

export default SignOutButton;

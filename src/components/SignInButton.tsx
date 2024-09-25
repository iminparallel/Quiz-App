"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SignInButton = ({ text }: Props) => {
  return (
    <Button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
      {text}
    </Button>
  );
};

export default SignInButton;

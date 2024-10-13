import React from "react";

import { getAuthSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";
//import QuizCreation from "@/components/forms/QuizCreation";

export const metadata = {
  title: "Quiz | Quizzzy",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  return <>quiz</>;
  //<QuizCreation topic={searchParams.topic ?? ""} />;
};

export default Quiz;

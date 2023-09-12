import React from "react";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";

export const HomepageBanner = () => {
  const description = `We strive to create a space where we can create content that will help parents become more aware of their childrens’ language development and become educated in speech language disabilities.`;
  return (
    <div className="m-auto my-5 max-w-screen-xl">
      <Card className="flex flex-col items-center justify-center ">
        <CardHeader>
          <h2 className="text-3xl font-bold">All Things Speech</h2>
        </CardHeader>
        <CardContent className="max-w-screen-md">{description}</CardContent>
      </Card>
    </div>
  );
};

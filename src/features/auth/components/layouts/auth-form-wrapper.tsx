import { Card } from "@/components/ui/card";
import React from "react";

interface AuthFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const AuthFormWrapper = ({ title, children }: AuthFormWrapperProps) => {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <Card className="bg-gradient-to-br from-gray-50 to-white shadow-lg">
        {children}
      </Card>
    </div>
  );
};

export default AuthFormWrapper;

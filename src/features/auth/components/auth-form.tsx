import React from 'react'

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
}

const AuthForm = ({ title, children }: AuthFormProps) => {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      {children}
    </div>
  )
}

export default AuthForm

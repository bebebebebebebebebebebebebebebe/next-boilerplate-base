import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      {children}
    </div>
  )
}

export default AuthLayout;

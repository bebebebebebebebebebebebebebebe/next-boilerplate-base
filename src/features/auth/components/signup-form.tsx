'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import AuthForm from './auth-form'

const GoogleButton = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Button
    type="button"
    variant="outline"
    className={cn(
      "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400",
      "flex items-center justify-center shadow-sm",
      className
    )}
    {...props}
  >
    <svg
      className="w-5 h-5 mr-2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
    Googleで{props.children}
  </Button>
)

export default function SignUpForm() {
  const [useEmail, setUseEmail] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // ここにフォーム送信のロジックを実装
    console.log('フォームが送信されました')
  }

  return (
    <AuthForm title="アカウント作成">
      <Card className="bg-gradient-to-br from-gray-50 to-white shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lastName">姓</Label>
                <Input id="lastName" required className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">名</Label>
                <Input id="firstName" required className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">ユーザー名（任意）</Label>
              <Input id="username" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            {useEmail ? (
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" required className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            ) : (
              <GoogleButton
                className="w-full"
                onClick={() => setUseEmail(true)}
              >
                登録
              </GoogleButton>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {useEmail ? (
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">アカウント作成</Button>
            ) : (
              <GoogleButton className="w-full">
                登録
              </GoogleButton>
            )}
            {useEmail && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      または
                    </span>
                  </div>
                </div>
                <GoogleButton
                  className="w-full"
                  onClick={() => setUseEmail(false)}
                >
                  登録
                </GoogleButton>
              </>
            )}
            <div className="text-center text-sm text-gray-500 mt-4">
              既にアカウントをお持ちですか？{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
                ログイン
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </AuthForm>
  )
}


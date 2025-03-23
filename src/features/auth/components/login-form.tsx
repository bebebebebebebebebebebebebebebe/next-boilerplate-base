"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AuthForm from "./auth-form";
import BaseFormButtonWithIcon, {
  providers,
} from "./buttons/BaseFormButtonWithIcon";
import Link from "next/link";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ここにフォーム送信のロジックを実装
    console.log("フォームが送信されました");
  };
  return (
    <AuthForm title="ログイン">
      <Card className="bg-gradient-to-br from-gray-50 to-white shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                required
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="password"
                required
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              ログイン
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">または</span>
              </div>
            </div>
            <BaseFormButtonWithIcon
              className="w-full"
              provider={providers[0]}
              action="login"
            />
            <div className="text-center text-sm text-gray-500 mt-4">
              アカウントをお持ちでないですか？{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                新規登録
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </AuthForm>
  );
};

export default LoginForm;

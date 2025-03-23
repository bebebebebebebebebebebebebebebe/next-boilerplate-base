import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import AuthFormWrapper from "../layouts/auth-form-wrapper";
import OAuthProviderButton from "../buttons/OAuthProviderButton";
import FormContentWithLogin from "./form-content-with-login";

const LoginForm = async () => {
  return (
    <AuthFormWrapper title="ログイン">
      <form>
        <FormContentWithLogin />
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
          <OAuthProviderButton providers={["Google"]} formType="login" />
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
    </AuthFormWrapper>
  );
};

export default LoginForm;

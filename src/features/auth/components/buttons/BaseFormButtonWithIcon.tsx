import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import GoogleButtonIcon from "./icons/GoogleButtonIcon";

export type AuthAction = "signup" | "login";

export interface ProviderStyle {
  name: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  icon: React.ReactNode;
}

export interface ProviderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: ProviderStyle;
  textContent: string;
  className?: string;
}

// export const providers: ProviderConfig[] = [
//   {
//     name: "Google",
//     bgColor: "bg-white",
//     textColor: "text-gray-700",
//     hoverBgColor: "hover:bg-gray-50",
//     hoverBorderColor: "hover:border-gray-400",
//     icon: <GoogleButtonIcon />,
//   },
// ];

const actionTexts = {
  signup: "登録",
  login: "ログイン",
};

const BaseFormButtonWithIcon: FC<ProviderButtonProps> = ({
  className,
  onClick,
  provider,
  textContent,
  ...props
}) => {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn(
        provider.bgColor,
        provider.textColor,
        "border-gray-300",
        provider.hoverBgColor,
        provider.hoverBorderColor,
        "flex items-center justify-center shadow-sm",
        className,
      )}
      {...props}
    >
      {provider.icon}
      {textContent}
      {/* {provider.name}で{actionTexts[action]} */}
    </Button>
  );
};

export default BaseFormButtonWithIcon;

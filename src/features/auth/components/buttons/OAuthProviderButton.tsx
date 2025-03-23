import { AuthProvider } from "@/features/types/auth.type";
import React from "react";
import BaseFormButtonWithIcon, {
  ProviderStyle,
} from "./BaseFormButtonWithIcon";
import GoogleButtonIcon from "./icons/GoogleButtonIcon";

interface OAuthProviderButtonProps {
  providers: AuthProvider[];
  formType: "signup" | "login";
}

type providerConfigType = {
  providerStyle: ProviderStyle;
  authAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const OAuthProviderButton: React.FC<OAuthProviderButtonProps> = ({
  providers,
  formType,
}) => {
  const googleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Google Login");
  };

  const providerStyles: providerConfigType[] = [
    {
      providerStyle: {
        name: "Google",
        bgColor: "bg-white",
        textColor: "text-gray-700",
        hoverBgColor: "hover:bg-gray-50",
        hoverBorderColor: "hover:border-gray-400",
        icon: <GoogleButtonIcon />,
      },
      authAction: googleLogin,
    },
  ];

  return providers.map((provider) => {
    const providerConfig = providerStyles.find(
      (style) => style.providerStyle.name === provider,
    );
    if (!providerConfig) {
      throw new Error(`Provider ${provider} not found in providerStyles`);
    }
    return (
      <BaseFormButtonWithIcon
        key={provider}
        provider={providerConfig?.providerStyle || {}}
        className="w-full"
        textContent={`${providerConfig.providerStyle.name}で${formType === "signup" ? "登録" : "ログイン"}`}
        onClick={providerConfig?.authAction}
      />
    );
  });
};

export default OAuthProviderButton;

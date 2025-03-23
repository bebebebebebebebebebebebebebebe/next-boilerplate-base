import { AuthProvider } from "@/features/types/auth.type";

export interface IOAuthStrategy<TLogin, TSignUp> {
  login(credentials: TLogin): Promise<AuthResult>;
  signup(signUpData: TSignUp): Promise<AuthResult>;
  refreshToken(token: string): Promise<AuthResult>;
}

export type AuthResult = {
  accessToken?: string;
  refreshToken?: string;
  provider: AuthProvider;
  expiresIn?: number;
};

export type OAuthLoginData = {
  provider: AuthProvider;
  oauthToken: string;
};

export type OAuthSignUpData = {
  provider: AuthProvider;
  oauthToken: string;
  username: string;
};

export type EmailLoginData = {
  email: string;
  password: string;
};

export type EmailSignUpData = {
  email: string;
  password: string;
  username: string;
};

// export class EmailOAuthStrategy implements IOAuthStrategy<EmailLoginData, EmailSignUpData> {
//   async login(credentials: EmailLoginData): Promise<AuthResult> {

//   }

//   async signup(signUpData: EmailSignUpData): Promise<AuthResult> {

//   }

//   async refreshToken(token: string): Promise<AuthResult> {

//   }
// }

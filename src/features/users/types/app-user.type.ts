export interface CreateInternalUser {
  id: number;
  email: string;
  username: string;
  fullName: string;
  hashedPassword: string;
  profileImageUrl?: string | null;
  isVerified?: boolean | null;
}

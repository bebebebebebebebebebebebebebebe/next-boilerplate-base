// next-auth.d.ts
import { JWT, Session, User, Account } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       role: string;
//     } & DefaultSession['user'];
//     accessToken?: string;
//     error?: string;
//   }

//   interface User {
//     id: string;
//     role: string;
//   }
// }

// declare module 'next-auth/adapters' {
//   interface AdapterUser {
//     id: string;
//     role: string;
//     name: string;
//     email: string;
//     image: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     user: AdapterUser;
//     accessToken: string;
//     accessTokenExpires: number;
//     refleshToken?: string;
//     error?: string;
//   }
// }

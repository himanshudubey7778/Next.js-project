import { createAuthClient } from "better-auth/react";

// Production optimization: fallback to localhost if environment variables are missing
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});

// Destructuring hooks to use anywhere across Tejjora-Shops UI components
export const { signIn, signOut, useSession } = authClient;
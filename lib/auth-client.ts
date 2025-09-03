import { createAuthClient } from "better-auth/react";

// Create a safe auth client that handles build-time scenarios
const createSafeAuthClient = () => {
  if (typeof window === 'undefined') {
    // Return a mock client during build time with proper Better Auth structure
    return {
      getSession: () => Promise.resolve({ data: null }),
      signIn: {
        email: () => Promise.resolve({ data: null, error: null }),
        social: () => Promise.resolve({ data: null, error: null }),
      },
      signOut: () => Promise.resolve(),
      signUp: {
        email: () => Promise.resolve({ data: null, error: null }),
      },
      useSession: () => ({ data: null, isPending: false, error: null }),
    };
  }
  
  return createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
  });
};

export const authClient = createSafeAuthClient();

// Export individual methods with safe fallbacks
export const signIn = authClient.signIn;
export const signOut = authClient.signOut;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;

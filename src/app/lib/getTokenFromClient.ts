import { authClient } from "./auth-client";



export const getTokenFromClient = async (): Promise<string | null> => {
  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      console.error("Failed to get JWT token:", error);
      return null;
    }

    return data.token;
  } catch (error) {
    console.error("Token error:", error);
    return null;
  }
};
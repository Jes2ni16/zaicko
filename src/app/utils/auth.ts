import { jwtDecode } from "jwt-decode";


// Define the shape of your decoded JWT payload
interface DecodedToken {
  userId?: string;
  username?: string;
  exp?: number; // Token expiration time (seconds since the epoch)
}

// Get the token from local storage or cookies
export const getToken = (): string | null => {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
};

// Decode the token
export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Check if the token is valid
export const isTokenValid = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) return false;

  const currentTime = Date.now() / 1000; // Current time in seconds
  return decoded.exp ? decoded.exp > currentTime : false; // Token is valid if it hasn't expired
};

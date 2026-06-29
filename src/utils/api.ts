// import { LoginCredentials, AuthResponse } from "../types/auth.types";

import type { AuthResponse, LoginCredentials } from "../types/auth.types";

export const loginRequest = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
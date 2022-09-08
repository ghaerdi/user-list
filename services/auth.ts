import type { IUserSignup, IUserLogin } from "../types";
import { BASE_API_URL } from "../utils/globals";

export async function loginService(data: IUserLogin) {
  const response = await fetch(`${BASE_API_URL}/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

export async function signupService(data: IUserSignup) {
  const response = await fetch(`${BASE_API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

import { BASE_API_URL } from "../utils/globals";

export async function getUserList(token: string) {
  const response = await fetch(`${BASE_API_URL}/users`, {
    headers: {
      Authorization: token
    }
  });
  return await response.json();
}

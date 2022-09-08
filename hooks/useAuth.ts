import type { IUserLogin, IUserSignup } from "../types";
import type { FormEvent } from "react";
import { loginService, signupService } from "../services/auth";
import { localStorageKeys } from "../utils/globals";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import getFormData from "../utils/getFormData";

export default function useAuth() {
  const [ error, setError] = useState({ isError: false, message: "" });

  const {
    saveValue: saveToken,
    clearValue: clearToken,
    hasValue: isLogged,
    isLoading
  } = useLocalStorage(localStorageKeys.token);
  const {
    saveValue: saveTokenExpiration,
    clearValue: clearTokenExpiration
  } = useLocalStorage(localStorageKeys.tokenExpiration);


  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = getFormData<IUserLogin>(event);
    const data = await loginService(formData);

    if (data.errors) {
      setError({ isError: true, message: data.errors.message });
    } else {
      saveTokenExpiration(data.expires)
      saveToken(data.token);
    }
  }


  async function signup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = getFormData<IUserSignup>(event);
    const data = await signupService(formData);

    if (data.errors) {
      setError({ isError: true, message: data.errors.message });
    } else {
      saveTokenExpiration(data.session.expires);
      saveToken(data.session.token);
    }
  }


  function logout() {
    clearTokenExpiration();
    clearToken();
  }


  return { login, signup, logout, error, isLogged, isLoading };
}

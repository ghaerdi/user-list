import { localStorageKeys } from '../utils/globals';
import { ReactNode } from "react"
import useLocalStorage from '../hooks/useLocalStorage';
import HeadComponent from "./HeadComponent";
import Section from "./Section";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { clearValue: clearToken } = useLocalStorage(localStorageKeys.token);

  const {
    value: tokenExpiration,
    clearValue: clearTokenExpiration
  } = useLocalStorage(localStorageKeys.tokenExpiration);

  if (tokenExpiration) {
    const expiration = new Date(tokenExpiration);
    const expired = expiration.getTime() < new Date().getTime() 

    if (expired) {
      clearTokenExpiration();
      clearToken();
    }
  }

  return (
    <HeadComponent>
      <Section>
        {children}
      </Section>
    </HeadComponent>
  );
}

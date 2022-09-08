import { FormEvent } from "react";

export default function getFormData<T>(event: FormEvent<HTMLFormElement>): T {
  const formData = new FormData(event.target as HTMLFormElement);
  return Object.fromEntries(formData) as T;
}

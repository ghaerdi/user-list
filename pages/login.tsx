import { useRouter } from "next/router";
import Notification from "../components/Notification";
import LoadingPage from "../components/LoadingPage";
import AuthForm from "../components/AuthForm";
import Button from "../components/Button";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import A from "../components/A";

export default function Login() {
  const { login, error, isLogged, isLoading } = useAuth()
  const router = useRouter();

  if (isLogged) router.push("/users");

  return (
    <LoadingPage loading={isLoading}>
      <LoadingPage loading={Boolean(isLogged)}>
        <AuthForm onSubmit={login} header="Login">
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />

          <Button type="submit">Login</Button>
          
          <A href="/signup">
            Don’t have an account yet?
          </A>

        </AuthForm>
        {error.isError && <Notification message={error.message} />}
      </LoadingPage>
    </LoadingPage>
  );
}

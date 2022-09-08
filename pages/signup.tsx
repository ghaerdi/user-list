import { useRouter } from "next/router";
import Notification from "../components/Notification";
import LoadingPage from "../components/LoadingPage";
import AuthForm from "../components/AuthForm";
import Button from "../components/Button";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import A from "../components/A";

export default function Signup() {
  const { signup, error, isLogged, isLoading } = useAuth();
  const router = useRouter();

  if (isLogged) router.push("/users");

  return (
    <LoadingPage loading={isLoading}>
      <LoadingPage loading={Boolean(isLogged)}>
        <AuthForm onSubmit={signup} header="Create an account">
          <Input type="text" name="firstname" placeholder="First name" />
          <Input type="text" name="lastname" placeholder="Last name" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Input type="password" name="verify_password" placeholder="Verify Password" />
          <Input type="text" name="default_company" placeholder="Company" />
          
          <Button type="submit">Signup</Button>

          <A href="/login">
            You already have an account?
          </A>

          {error.isError && <Notification message={error.message} />}
        </AuthForm>
      </LoadingPage>
    </LoadingPage>
  );
}

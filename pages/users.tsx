import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import UserTable from "../components/userTable";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export default function Users() {
  const { logout, isLogged, isLoading } = useAuth();
  const router = useRouter();

  if (isLogged === false) router.push("/login");

  return (
    <LoadingPage loading={isLoading}>
      <LoadingPage loading={!isLogged}>
        <div className="grid gap-3 w-full sm:max-w-7xl">
          <Button onClick={logout}>Logout</Button>
          <UserTable />
        </div>
      </LoadingPage>
    </LoadingPage>
  );
}

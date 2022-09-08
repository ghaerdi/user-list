import type { IUser } from "../types";
import { useEffect, useMemo, useState } from "react";
import { localStorageKeys } from "../utils/globals";
import { getUserList } from "../services/users";
import useLocalStorage from "../hooks/useLocalStorage";

export default function UserTable() {
  const { value: token } = useLocalStorage(localStorageKeys.token);
  const [ userList, setUserList ] = useState<IUser[]>([]);

  useEffect(() => {
    if (token) {
      getUserList(token).then(setUserList)
    }
  }, [token]);

  const userListComponent = useMemo(() =>
    userList.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.default_company}</td>
        <td>{item.registered}</td>
        <td>{item.updated_at}</td>
      </tr>
    )
  ), [userList]);

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Id</th>
            <th className="text-left">First name</th>
            <th className="text-left">Last name</th>
            <th className="text-left">Company</th>
            <th className="text-left">Registed</th>
            <th className="text-left">Last update</th>
          </tr>
        </thead>
        <tbody>
          {userListComponent}
        </tbody>
      </table>
    </div>
  );
}

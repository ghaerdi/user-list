interface IUserBase {
  firstname: string;
  lastname: string;
  email: string;
  default_company: string;
}

export interface IUserSignup extends IUserBase {
  password: string;
  verify_password: string;
}

export interface IUser extends IUserBase {
  id: number;
  registered: string;
  updated_at: string;
}

export type IUserLogin = Pick<IUserSignup, "email" | "password">;


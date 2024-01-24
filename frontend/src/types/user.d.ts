export interface IUser {
  id?: number;
  username?: string;
  email?: string;
  password: string;
  createdAt?: string;
}

export interface IUserRegister {
  username: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

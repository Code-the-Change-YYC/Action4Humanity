import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

interface userInfoType {
  uid: string;
}

interface UserAuthContextType {
  userInfo: userInfoType | null;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType | null>>;
  getLocalStorage: () => void;
  setLocalStorage: () => void;
  register: () => void;
  login: () => void;
  logout: () => void;
}

const UserAuthContextParams: UserAuthContextType = {
  // only doing this because of eslint and idk how to fix it
  userInfo: null,
  setUserInfo: () => {},
  getLocalStorage: () => {},
  setLocalStorage: () => {},
  register: () => {},
  login: () => {},
  logout: () => {},
} as const;

const UserAuthContext = createContext<UserAuthContextType>(
  UserAuthContextParams
);

export function UserAuthContextProvider({ children }: Props) {
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null);

  const getLocalStorage = () => {};

  const setLocalStorage = () => {};

  const register = () => {};

  const login = () => {};

  const logout = () => {};

  return (
    <UserAuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        getLocalStorage,
        setLocalStorage,
        register,
        login,
        logout,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth(): UserAuthContextType {
  return useContext(UserAuthContext);
}

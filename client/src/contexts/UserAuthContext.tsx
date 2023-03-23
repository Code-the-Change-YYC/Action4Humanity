import { createContext, useState, useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[]
};

type userInfoType = {
  uid: string
}

type UserAuthContextType = {
  userInfo: userInfoType | null,
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType | null>>,
  getLocalStorage: () => void,
  setLocalStorage: () => void,
  register: () => void,
  login: () => void,
  logout: () => void
};

const UserAuthContext = createContext<UserAuthContextType>({} as UserAuthContextType);

export function UserAuthContextProvider({children}: Props) {
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null);

  const getLocalStorage = () => {

  };

  const setLocalStorage = () => {

  };

  const register = () => {

  }

  const login = () => {

  };

  const logout = () => {

  };

  return (
    <UserAuthContext.Provider value={{userInfo, setUserInfo, getLocalStorage, setLocalStorage, register, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export function useUserAuth(): UserAuthContextType {
  return useContext(UserAuthContext);
}

import type { ReactElement } from "react";

interface BaseState<t> {
  isLoading: boolean;
  error: string | null;
  data: t | null;
}

interface AuthData {
  id: string;
  name: string;
  email: string;
  image: string;
  role: "ADMIN";
}

export type AuthState = BaseState<AuthData | null> & {
  isLoggedIn: boolean;
};

export interface SidebarItem {
  label: string;
  url: string;
  icon: ReactElement;
}

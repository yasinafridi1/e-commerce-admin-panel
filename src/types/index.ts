import type { ChangeEvent, FocusEvent, ReactElement } from "react";

interface BaseState<t> {
  isLoading: boolean;
  error: string | null;
  data: t | null;
}

interface AuthData {
  userId: string;
  fullName: string;
  email: string;
  image?: string;
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

export interface TextInputProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  error?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  touch?: boolean;
  type?: string;
}

export interface LoginInitialState {
  email: string;
  password: string;
  fcmToken: string;
}

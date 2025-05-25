import type { ChangeEvent, FocusEvent, ReactElement } from "react";

interface BaseStateAdmin<t> {
  isLoading: boolean;
  error: string | null;
  data: t | null;
}

interface BaseInitialState<T> {
  isLoading: boolean;
  error: string | null;
  data: T | [];
}

interface AuthDataState {
  userId: number;
  fullName: string;
  email: string;
  image?: string;
  role: "ADMIN" | "CUSTOMER";
  profilePicture?: string;
}

export type AuthState = BaseStateAdmin<AuthDataState | null> & {
  isLoggedIn: boolean;
};

interface PaginationBaseState<T> extends BaseInitialState<T> {
  page: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

interface CustomerData extends AuthDataState {
  phoneNumber: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  isVerified: boolean;
  status: "ACTIVE" | "BLOCKED";
}
interface CategoryData {
  categoryId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export type CustomerState = PaginationBaseState<CustomerData[]>;
export type CategoryState = PaginationBaseState<CategoryData[]>;
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

export interface PaginationProps {
  totalPages: number;
  handleNext: () => void;
  handleBack: () => void;
  goToPage: (pageNumber: number) => void;
  limit: number;
  totalRecords: number;
  currentPage: number;
}
export interface TableWarperProps extends PaginationProps {
  customWidthClass?: string;
  children: ReactElement | ReactElement[];
}

export interface TableHeadCellProps {
  text: string;
  customClassess?: string;
}

export interface TableBodyProps {
  loading: boolean;
  noData: boolean;
  colSpan: number;
  children: ReactElement | ReactElement[];
}

export interface ActionColumnProps {
  edit?: boolean;
  deleteOpt?: boolean;
  view?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  detailUrl?: string;
}

export interface ModalFooterProps {
  onClose: () => void;
  onSubmit?: () => void;
  loading?: boolean;
}

export interface ModalLayoutProps extends ModalFooterProps {
  headerText: string;
  open: boolean;
  children: ReactElement | ReactElement[];
  initialLoader?: boolean;
  error?: string | null;
}

export interface AddEditModalProps {
  open: boolean;
  onClose: () => void;
  data?: any;
}

export interface AddEditModalState {
  status?: boolean;
  data?: any;
}

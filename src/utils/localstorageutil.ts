import CONSTANTS from "../constants";

export const storeInLocalStorage = (
  key: string,
  value: string,
) => {
  localStorage.setItem(
    key,
    JSON.stringify(value),
  );
};

export const getLocalStorageValue = (
  key: string,
) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const removeFromLocalStorage = (
  key: string,
) => {
  localStorage.removeItem(key);
};

export const storeTokens = (data: any) => {
  const { accessToken, refreshToken } = data;
  storeInLocalStorage(
    CONSTANTS.accessToken,
    accessToken,
  );
  storeInLocalStorage(
    CONSTANTS.refreshToken,
    refreshToken,
  );
};

export const removeTokens = () => {
  removeFromLocalStorage(CONSTANTS.accessToken);
  removeFromLocalStorage(CONSTANTS.refreshToken);
};

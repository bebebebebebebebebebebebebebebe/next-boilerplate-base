import { RequestOptions } from "@/lib/types/api-client-type";
import { getServerCookies, fetchApi } from "@/lib/api-client";
import { isServer } from "@/utils/env";

const getAccessTokenFromCookies = async () => {
  const cookies = await getServerCookies();

  const accessToken = cookies
    .split('; ')
    .find((cookie) => cookie.startsWith('accessToken='))
    ?.split('=')[1];

  return accessToken || '';
}; 

export const fetchApiWithAuth = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  if (!isServer()) {
    throw new Error('fetchApiWithAuth is only available on the server');
  }

  const accessToken = await getAccessTokenFromCookies();
  if (!accessToken) {
    throw new Error('Access token not found in cookies');
  }

  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  const newOptions = {
    ...options,
    headers,
  };

  return fetchApi<T>(url, newOptions);
}

import { RequestOptions } from '@/lib/types/api-client-type';

export const getServerCookies = async () => {
  if (typeof window !== 'undefined') return '';

  return import('next/headers').then(async ({ cookies }) => {
    try {
      const cookieStore = await cookies();
      return cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join('; ');
    } catch (error) {
      console.error('Failed to access cookies:', error);
      return '';
    }
  });
}

const createApiUrlWithParams = (url: string, params?: RequestOptions['params']) => {
  if (!params) return url;

  const filteredParamsList = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  );
  if (Object.keys(filteredParamsList).length === 0) return url;

  const queryString = new URLSearchParams(filteredParamsList as Record<string, string>).toString();
  return `${url}?${queryString}`;
}

export const fetchApi = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  const {
    method = 'GET',
    headers = {},
    body,
    cookie,
    params,
    cache = 'no-store',
    next,
  } = options;

  let cookieHeader = cookie;
  if (typeof window === 'undefined' && !cookie) {
    cookieHeader = await getServerCookies();
  }

  const urlWithParams = createApiUrlWithParams(url, params);

  const response = await fetch(urlWithParams, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
    cache,
    next,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}


export const fetchApiInterceptor = {
  get: <T>(url: string, options?: RequestOptions): Promise<T> => fetchApi<T>(url, { ...options, method: 'GET' }),
  post: <T>(url: string, body?: any, options: RequestOptions = {}): Promise<T> => fetchApi<T>(url, { ...options, method: 'POST', body }),
  put: <T>(url: string, body?: any, options: RequestOptions = {}): Promise<T> => fetchApi<T>(url, { ...options, method: 'PUT', body }),
  patch: <T>(url: string, body?: any, options: RequestOptions = {}): Promise<T> => fetchApi<T>(url, { ...options, method: 'PATCH', body }),
  delete: <T>(url: string, options: RequestOptions = {}): Promise<T> => fetchApi<T>(url, { ...options, method: 'DELETE' }),
};

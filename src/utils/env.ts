export const isClient = (): boolean => typeof window !== 'undefined';

export const isServer = (): boolean => !isClient();


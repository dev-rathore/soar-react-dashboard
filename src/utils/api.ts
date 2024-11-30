export const simulateApiCall = <T>(data: T, timeout: number = 3000) =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), timeout);
  });

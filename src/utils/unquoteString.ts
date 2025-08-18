export const unquoteString = <T extends string>(string: T): T => {
  return string.replaceAll('"', "") as T;
};

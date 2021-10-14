export const parseString = (str: string): string => {
  return str.normalize('NFD')
    .replace(/[^a-zA-Zs]/g, '')
    .replace(/\s/g, '_')
    .toLowerCase()
}

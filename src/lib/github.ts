export const githubLabel = (url: string): string => {
  try {
    const parts = new URL(url).pathname.split("/").filter(Boolean);
    if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    if (parts.length === 1) return parts[0];
  } catch {
    // Fall through to the raw value.
  }
  return url;
};

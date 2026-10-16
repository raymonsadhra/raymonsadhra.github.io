const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const basePath = configuredBasePath.replace(/\/$/, "");
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://raymon-sadhra-built-worlds.buzzysong256.chatgpt.site").replace(/\/$/, "");

export function withBasePath(value: string) {
  if (!value.startsWith("/") || value.startsWith("//")) return value;
  return `${basePath}${value}`;
}

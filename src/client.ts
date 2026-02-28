const BASE_URL = "https://api.ipums.org";

export function getApiKey(): string {
  const key = process.env.IPUMS_API_KEY;
  if (!key) throw new Error("IPUMS_API_KEY environment variable is not set");
  return key;
}

export async function ipumsRequest(
  path: string,
  options: {
    method?: string;
    params?: Record<string, string | number>;
    body?: unknown;
  } = {}
): Promise<unknown> {
  const { method = "GET", params, body } = options;

  const url = new URL(`${BASE_URL}${path}`);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, String(value));
    }
  }

  const headers: Record<string, string> = {
    Authorization: getApiKey(),
  };
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let detail = "";
    if (response.status < 500) {
      // Include sanitized body for client errors (4xx) to surface useful messages
      try {
        const text = await response.text();
        const sanitized = text.replace(/<[^>]*>/g, "").trim().slice(0, 200);
        if (sanitized) detail = `: ${sanitized}`;
      } catch {
        // ignore parse errors
      }
    }
    throw new Error(
      `IPUMS API request failed: ${response.status} ${response.statusText}${detail}`
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

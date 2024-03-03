export default async function refreshTokenFetchService(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  async function refreshTokens() {
    const response = await fetch(`http://localhost:3000/auth/update-tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: localStorage.getItem("refreshToken"),
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh tokens");
    }
    const tokens = await response.json();
    localStorage.setItem("accessToken", tokens.access_token);
    localStorage.setItem("refreshToken", tokens.refresh_token);
    return tokens.access_token;
  }

  let accessToken = localStorage.getItem("accessToken");

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    try {
      accessToken = await refreshTokens();
      response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw new Error("Session expired. Please log in again.");
    }
  }

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
}

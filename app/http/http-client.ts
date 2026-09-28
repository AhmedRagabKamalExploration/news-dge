import { getFullApiUrl } from "../services/domain";

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

class HttpClient {
  constructor(private readonly baseUrl: string) {}

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${path}`);
    if (!response.ok) {
      throw new HttpError(await response.text(), response.status);
    }
    return response.json();
  }
}

export const httpClient = new HttpClient(getFullApiUrl());

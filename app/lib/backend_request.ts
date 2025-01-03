import Cookies from "js-cookie";

export type BackendRequestOptions<TBody = any> = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit | undefined;
  body?: TBody;
  query?: Record<string, string | number>;
  signal?: AbortSignal;
  cache?: "no-cache" | "default" | "reload" | "force-cache" | "only-if-cached";
};

const BODYLESS_STATUS_CODES = [101, 204, 205, 304];

interface BackendStreamEvent {
  event: string;
}

export class TypedResponse<T> extends Response {
  constructor(response: Response) {
    const body = BODYLESS_STATUS_CODES.includes(response.status)
      ? null
      : response.body;

    try {
      super(body, response);
    } catch (e) {
      console.error(e);
      super(null, response);
    }
  }

  async json(): Promise<T> {
    return super.json();
  }
}

export class BackendRequest {
  private static json<TRequest>(
    path: string,
    options: BackendRequestOptions<TRequest>,
  ) {
    const cleanedURL = this.getCleanURL(path);

    const cleanedURLWithQueryParams = this.addQueryParams(
      cleanedURL,
      options.query,
    );

    const workspaceId = Cookies.get("current_workspace");

    const updatedOptions = {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Workspace-Id": workspaceId ?? "",
        ...options.headers,
      },
      body: JSON.stringify(options.body),
      signal: options.signal,
      cache: options.cache,
    };

    return fetch(cleanedURLWithQueryParams, updatedOptions);
  }

  private static form<TRequest>(
    path: string,
    options: BackendRequestOptions<TRequest>,
    formData: FormData,
  ) {
    const cleanedURL = this.getCleanURL(path);
    const cleanedURLWithQueryParams = this.addQueryParams(
      cleanedURL,
      options.query,
    );

    const workspaceId = Cookies.get("current_workspace");

    const updatedOptions = {
      method: options.method,
      headers: {
        accept: "application/json",
        "X-Workspace-Id": workspaceId ?? "",
        ...options.headers,
      },
      body: formData,
      cache: options.cache,
    };

    return fetch(cleanedURLWithQueryParams, updatedOptions);
  }

  public static async call<TRequest, TResponse>(
    path: string,
    options: BackendRequestOptions<TRequest>,
    formData?: FormData,
  ): Promise<TypedResponse<TResponse>> {
    const hasFormData = formData && !formData.entries().next().done;

    if (hasFormData) {
      const formResponse = await BackendRequest.form<TRequest>(
        path,
        options,
        formData,
      );
      return new TypedResponse<TResponse>(formResponse);
    }

    const response = await BackendRequest.json<TRequest>(path, options);
    return new TypedResponse<TResponse>(response);
  }

  public static async stream<TRequest, TEventType extends BackendStreamEvent>(
    path: string,
    options: BackendRequestOptions<TRequest>,
    {
      onStreamEvent,
      onStreamEnd,
      onStreamStart,
    }: {
      onStreamEvent: (event: TEventType) => void;
      onStreamStart?: () => void;
      onStreamEnd?: () => void;
    },
  ) {
    const response = await BackendRequest.json<TRequest>(path, options);

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error("Response body is not readable");
    }

    if (onStreamStart) {
      onStreamStart();
    }

    function processStream({
      done,
      value,
    }: {
      done: boolean;
      value?: Uint8Array;
    }) {
      if (done) {
        return;
      }

      const chunks = decoder.decode(value, { stream: true });

      chunks.split("\n\n").forEach(async (chunk) => {
        if (chunk.trim() !== "") {
          const eventName = /event: (.*)/.exec(chunk)?.[1];
          const data = /data: (.*)/.exec(chunk)?.[1];

          if (!eventName) {
            console.error("Invalid stream event");
            return;
          }

          if (!data) {
            console.error("Invalid stream data");
            return;
          }

          try {
            onStreamEvent({
              event: eventName,
              data: JSON.parse(data),
            } as unknown as TEventType); // CAMERON: This is a hack to make TypeScript happy
          } catch (e) {
            console.error(e);
            console.error("Failed to parse stream event");
            console.error(data);
          }
        }

        if (!reader) {
          return;
        }

        const readReader = await reader.read();
        processStream(readReader);
      });
    }

    const readReader = await reader.read();
    processStream(readReader);

    if (onStreamEnd) {
      onStreamEnd();
    }
  }

  private static getCleanURL(path: string): string {
    let fullURL;
    if (path.startsWith("/")) {
      fullURL = `${process.env.NEXT_PUBLIC_API_URL}${path}`;
    } else {
      fullURL = `${process.env.NEXT_PUBLIC_API_URL}/${path}`;
    }

    const url = new URL(fullURL);

    if (!url.pathname.endsWith("/")) {
      url.pathname += "/";
    }

    return url.toString();
  }

  private static addQueryParams(
    url: string,
    query?: Record<string, string | number>,
  ) {
    if (!query) {
      return url;
    }

    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);

    Object.keys(query).forEach((key) => {
      searchParams.append(key, String(query[key]));
    });

    urlObj.search = searchParams.toString();

    return urlObj.toString();
  }
}

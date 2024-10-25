import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export default class Api {
  private readonly transport: GrpcWebFetchTransport;
  private readonly url: string = "http://localhost:8000";

  constructor() {
    this.transport = new GrpcWebFetchTransport({
      baseUrl: this.url,
    });
  }

  public getGrpcWebFetchTransport(): GrpcWebFetchTransport {
    return this.transport;
  }

  public handleRequestError(error: unknown, message: string): void {
    if (error instanceof Error) {
      console.error(message, error.message);
      return;
    }

    console.error(message, error);
  }
}
